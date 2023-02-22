---
title: 'ERICWEBSITE.INFO'
tags: ['code', 'web', 'javascript', 'mithril.js', 'docker', 'ghost']
blurb: 'My photography portfolio website. I made it with a <b>Mithril.js</b> front-end and a headless <b>Ghost CMS</b> backend both served from <b>Docker</b> containers on my <b>Digital Ocean</b> droplet'
imgSrc: '/images/ews.webp'
bannerSrc: '/images/ewsheader.jpg'
imgWidth: 1280
imgHeight: 400
imgScale: 0.33
---

## Purpose

I wanted my photography portfolio, [ericwebsite.info](https://ericwebsite.info), to reflect my photography itself. On the front end it should be simple, fast, and easy to read. The simple structures that make up content of the images should come first with little elese to get in the way or distract the viewer. On the back end I wanted things similarily simple. There should be as little uneeded production as possible between the subject as viewed, the image realised, and then its publication.

## Features

The primary feature I wanted for my site was a simple web based interface for uploading images that gave opportunities for some custom styling and with potential for extension where needed. In addition I wanted to be able to create sub pages with additional text or images themed by group. Once set up I didn't want to have to think about implementation or ever have to get into a shell to make new posts.

## Technology

Because I would be updating my portfolio regularly I wanted to have a nice web-based interface for uploading images that would give me some control over how they were displayed. In addition I wanted the user facing page to be fast and responsive. I chose **Ghost** as my headless CMS because its free, easy to set up, and is simple to use but with a lot of potential for extension. 

For the frontend I decided to use **Mithril.js**. At the time, and even now to a certain extent, the popular frontend frameworks were heavyweight pieces of software that ate RAM and when used carelessly could really bog down a web browsing experience. Mithril on the other hand was designed to be snappy and lightweight. Mithril.js has a footprint of under 10kb and when used properly can outperform any of the big frameworks on dynamic pages. It is a bit minimalist but it was exactly what I needed and nothing more.

The Ghost CMS lives in a **Docker** container on my **Digital Ocean** droplet along with all the static content that I serve using **NGINX** as a reverse proxy and web server. The database is **MariaDB** which I use for a variety of other things and runs out of it's own Docker container.

## Screenshots

![Eric Website Screenshot](/images/ewsscreenshot.png)