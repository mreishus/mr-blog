---
title: "self-hosted gitlab: adding a docker registry with a self-signed certificate"
date: 2019-08-19T09:50:51-05:00
templateKey: blog-post
---

## Problem Description

You run a self-hosted instance of [GitLab](https://about.gitlab.com/) and wish
to add private docker container registry (storage and distribution for docker
images inside gitlab). Your gitlab server is on a private network, so it does
not have a valid SSL certificate, but the container registry uses SSL.

## Ensure you are not using zeroconf/avahi/mDNS.

My gitlab machine's address was `gitlab.local`, powered by *avahi-daemon*. This
isn't advised, especially if you plan to generate docker images for your
project, which will probably use GitLab's [docker-in-docker
workflow](https://docs.gitlab.com/ee/ci/docker/using_docker_build.html#use-docker-in-docker-executor).
These addresses often need to be looked up inside docker images, and that's not
easy with avahi.

Add a dns record for the machine on your router or dns server that does not use
the `.local` domain.  In my case, I added a dns entry for `gitlab.local.p`, but
you may use anything.

## Create a self-signed SSL certificate

Use this command to create two files: `openssl req -new -newkey rsa:4096 -x509
-sha256 -days 365 -nodes -out gitlab.local.p.crt -keyout gitlab.local.p.key`

It asks some questions.  Here is my example output with my answers.

```
root@gitlab /r/certs # openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out gitlab.local.p.crt -keyout gitlab.local.p.key
Generating a RSA private key
.......................................................++++
..............................................................................................................++++
writing new private key to 'gitlab.local.p.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:TX
Locality Name (eg, city) []:Dallas
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Homelab
Organizational Unit Name (eg, section) []:Gitlab
Common Name (e.g. server FQDN or YOUR name) []:gitlab.local.p
Email Address []:admin@example.com
```

&nbsp;

## Copy the cert into Gitlab's Config directory

I use a docker mounted gitlab omnibus instance, so my gitlab config files are
in `/srv/gitlab/config`.  Copy both the `gitlab.local.p.crt` and
`gitlab.local.p.key` files into the `/srv/gitlab/config/ssl/` directory,
creating it if needed.

## Configure GitLab

Now, let's turn on the registry inside gitlab and have it use our self-signed
files.  Edit your `/srv/gitlab/config/gitlab.rb` file.  Here are the lines I
set:

```
registry_external_url 'https://gitlab.local.p:4567'

nginx['ssl_certificate'] = "/etc/gitlab/ssl/gitlab.local.p.crt"
nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/gitlab.local.p.key"
registry_nginx['ssl_certificate'] = "/etc/gitlab/ssl/gitlab.local.p.crt"
registry_nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/gitlab.local.p.key"
```

Since I'm running the registry on port 4567, I needed my gitlab docker service
to publish that port.  I edited my `/etc/systemd/system/docker-gitlab.service`
file and added `--publish 4567:4567` to the command line.

Reconfigure/restart gitlab.

## Distribute copies of the cert to other machines

If we want other computers on our local network to be able to access the docker
registry, they need to have a copy of the cert file in a specific location.
Otherwise, docker will throw an error when connecting to the registry.

The `gitlab.local.p.crt` needs to be placed in the directory+location
`/etc/docker/certs.d/gitlab.local.p:4567/ca.crt` on any computer that will access
this registry.

I added some ansible code to my docker role to make this easier:

```yaml
- name: Creates /etc/docker/certs.d/gitlab.local.p:4567 directory
  file:
    path: /etc/docker/certs.d/gitlab.local.p:4567
    state: directory
    owner: root
    group: root
    mode: 0775
    recurse: yes
- name: copy ca.crt
  copy:
    src: ca.crt
    dest: /etc/docker/certs.d/gitlab.local.p:4567/ca.crt
    owner: root
    group: root
    mode: 0644
```

&nbsp;

## Configure GitLab-Runner

Our workflow will use a *gitlab-runner* using the *docker* executor to create
docker images.  This is the [docker-in-docker
workflow](https://docs.gitlab.com/ee/ci/docker/using_docker_build.html#use-docker-in-docker-executor).
There's a few settings that need to be set in the `config.toml` file for the
gitlab runner.

Here's the *runners.docker* section of my `config.toml`:
```
  [runners.docker]
    tls_verify = false
    image = "alpine:latest"
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    volumes = ["/cache", "/certs/client"]
    shm_size = 0
```

I had to **set privileged to true** and **add `/certs/client` to volumes**.

## Modify the default docker .gitlab-ci.yml

Our sample gitlab project is anything with a `Dockerfile` that can create an
image using `docker build`.  Ideally, you can use the templated version often
`.gitlab-ci.yml` for docker that gitlab provides when clicking the "Set up
CI/CD button".  However, that will error out with an unknown authority message
in this case.

The error is because we're launching a new docker image, then trying to connect
to the repository while inside that image.  But the new image doesn't have a
copy of the self-signed certificate to know that it's valid.

[Here's a long thread on gitlab.com discussing possible
solutions](https://gitlab.com/gitlab-org/gitlab-runner/issues/1350).  The
solution that worked for me was:  Serving a copy of the certificate file on a
local HTTP server, then configuring the `.gitlab-ci.yml` file to download that
file early in the process.  It's dirty, but it works.

For an http server, I used the built in *snippets* function inside gitlab,
uploaded the certificate file, and set it to be accessible without
authentication.  This isn't the most secure, but it is on my internal network
only.  

Here is a modified copy of `.gitlab-ci.yml` that works for me:

```yaml
# This file is a template, and might need editing before it works on your project.
build-master:
  # Official docker image.
  image: docker:latest
  stage: build
  services:
    - name: docker:dind
      command:
        - /bin/sh
        - -c
        - wget http://gitlab.local.p/snippets/1/raw -O /usr/local/share/ca-certificates/ca.crt && update-ca-certificates && dockerd-entrypoint.sh || exit
  before_script:
    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY
  script:
    - docker build --pull -t "$CI_REGISTRY_IMAGE" .
    - docker push "$CI_REGISTRY_IMAGE"
  only:
    - master

build:
  # Official docker image.
  image: docker:latest
  stage: build
  services:
    - docker:dind
  before_script:
    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY
  script:
    - docker build --pull -t "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG" .
    - docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG"
  except:
    - master
```

In the thread, @debuglevel posted a more fleshed out `.gitlab-ci.yml` with a
similiar workaround:
[gitlab-ci.yml](https://gist.github.com/mreishus/bc35b3b241a9f9fdf4a021aeaabfcc5a).

There are other solutions posted in the thread worth trying.  Some solutions
used a `CI_SERVER_TLS_CA_FILE` variable, which I could not get to work.

## References

- [Docker: Use self-signed
certificates](https://docs.docker.com/registry/insecure/#deploying-a-plain-http-registry)
- [Gitlab.com issue thread](https://gitlab.com/gitlab-org/gitlab-runner/issues/1350)
- [GitLab Container Registry
admin](https://docs.gitlab.com/ee/administration/container_registry.html#configure-container-registry-under-an-existing-gitlab-domain)
- [GitLab Container Registry for
projects](https://docs.gitlab.com/ee/user/project/container_registry.html)

## An Easier Way?

As I was writing this post, I found
[instructions for making let's encrypt certificates for private domains](https://community.letsencrypt.org/t/certificates-for-hosts-on-private-networks/174/35).  If it's possible to make a valid certificate for
*gitlab.yourdomain.com* pointing to a private address like *192.168.1.10*, this may
be much easier than all of the workarounds described here.

