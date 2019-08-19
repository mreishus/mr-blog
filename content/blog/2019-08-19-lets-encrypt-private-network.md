---
title: "let's encrypt certificates for private network addresses (ex: 192.168.1.100)"
date: 2019-08-19T19:50:51-05:00
templateKey: blog-post
---

## Problem Description

You have a host name that only exists on a private network. For example,
*"myserver.mydomain.com"* resolves to an address like *192.168.x.y*,
*172.16-31.b.c*, or *10.a.b.c*.  You'd like a free, signed, valid SSL
certificate for this host, but you don't plan on putting this host on the
internet.  How do you get a **let's encrypt** certificate for it?

## Answer

It's possible using DNS challenges.  I found [instructions for making let's
encrypt certificates for private
domains](https://community.letsencrypt.org/t/certificates-for-hosts-on-private-networks/174/35).
Since this is posted in a forum thread, I'm reposting the information just in
case something happens to it.  All credit goes to [Bryan Larsen on the Let's
Encrypt Forums](https://community.letsencrypt.org/u/bryanlarsen).

---

Requirements: 
- a domain name (example.com)
- access to the DNS server for example.com
- root access on a publicly accessible server (server.example.com). 

And let’s assume you want to create a certificate for 192.168.7.7 named foo.example.com

- install `certsling` on the server.
- Add an A record to point foo(.example.com) to 192.168.7.7
- Add an NS record to point \_acme-challenge.foo(.example.com) to server.example.com
- `sudo socat -T15 udp4-recvfrom:53,reuseaddr,fork tcp:localhost:8053` on your server
- open port 53 on your server firewall
- `mkdir myemail@example.com`
- `cd myemail@example.com`
- `certsling -s --dns foo.example.com` to get certs from the letsencrypt staging server
- When the previous step works, `rm -rf *`
- `certsling --dns foo.example.com` to get real certs

Your certs will be in "myemail@example.com/foo.example.com/"!

---

This worked perfectly for me.  I was able to copy the -chained.crt and the .key
file to my gitlab server, to have a local-only docker container registry using
SSL without any workarounds.  The only downside being that, it's a manual
process I will have to repeat every 3 months.
