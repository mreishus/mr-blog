---
title: "ssh-keygen best practice"
date: 2019-07-04T09:50:51-05:00
templateKey: blog-post
---

Just a quick note since I'm looking this up so often.  To create an SSH key
with the latest public key algorithm and some extra KDF rounds, use this
command:

```
ssh-keygen -t ed25519 -a 100
```

See: ["What are ssh-keygen best practices?" on StackExchange](https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices).
