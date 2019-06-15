---
title: "Visually Classifying between 600 SNES games with 95.8% accuracy"
date: 2019-06-03T09:50:51-05:00
templateKey: blog-post
---

In the online class [Practical Deep Learning for Coders
2019](https://www.fast.ai/2019/01/24/course-v3/), we learned how to create a
world-class image classifer model for the [Oxford-IIIT Pet
Dataset](http://www.robots.ox.ac.uk/~vgg/data/pets/), which contains 37
different categories of pets.

I wondered if I could use the same techniques to create **a model that could
examine a video game screenshot and determine which of ~600 Super Nintendo
games it belonged to**.  Would 600 categories be too much?  Would transfer
learning from ImageNet work on game screenshots which don't even exist in the
real world?

It ended up working surprisingly well, with an accuracy of 95.8%.

- Technologies used: Python, pytorch, fast.ai, elixir, youtube-dl, ffmpeg, docker, starlette, react
- [Online Demo](https://snes.matthewreishus.com/)
- [Code and explanations](https://github.com/mreishus/snes_classifier)

This repository contains:
  * All of the scripts I used to collect the training data from youtube
  * The notebooks I used to create the model
  * My trained model
  * A web front-end
  * Dockerfiles for running the web front-end and inference using CPU
  * A systemd service definition for running the web from
  * Ansible role to clone this repository and set up the systemd service.

