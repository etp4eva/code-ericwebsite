---
title: 'Trees'
tags: ['code', 'game', 'c++', 'opengl']
blurb: 'I wrote this game in <b>OpenGL</b> and <b>C++</b> where you walk through an endless stylized forest. It is beautiful and I am proud of it.'
imgSrc: '/images/trees/trees.jpg'
bannerSrc: '/images/trees/trees.jpg'
videoSrc: '/videos/trees.webm'
imgWidth: 1280
imgHeight: 400
imgScale: 0.33
---

## Purpose

I originally came up with the idea for this game around 5 years ago when I first moved to London from Vancouver, where I grew up. I loved London for all that it had to offer but still I missed the endless forests of British Columbia. I wanted to create a game where I could stroll through an endless forest. This is actually the third iteration of this game and not the last, each one has a completely different style and has been a technical improvement on the last.

## Features

The original concept was fairly simple. I wanted a procedurally generated mountainous landscape filled with procedurally generated trees. In the next iteration you were a canoer on a lake with a painterly art style. In this most recent version it is a return to the forest with low res trees and some full-screen pixelation.

What each version has in common was a need to asynchronously generate an endless landscape filled with trees and allow the player to move through it with gravity and collision. In the latest version I included a number of features that didn't exist in previous ones. These included snowy mountains, dynamic lighting through cloudy skies, and a day night cycle that featured the sun, moon, and stars.

## Technology

I wrote every part of this game from the ground up in **C++** using **OpenGL** for rendering. I used **GLAD** for loading OpenGL symbols and **GLFW** for windowing and input. I used **libnoise** for terrain generation.

I learned a lot while making this game about synchronizing threads and the finicky way you have to manage resources with OpenGL. Also I created some rather complex shaders and came up with some clever tricks for rendering a large scene in realtime.

I enjoy working with low level languages on high performance projects. Having to think about bit-width, data packing, and the way different algorithms will compile gives you a different point of view on the higher level problems. I find the arcane quality of working close to the bare metal in software very satisfying.

In the end I am quite pleased with how it turned out. I am proud of this iteration but already thinking about the next version which I will program in **Rust** using **Vulkan**.

## Screenshots
<center>

[![Trees screenshot 1](/images/trees/mpv-shot0010.jpg)](/images/trees/mpv-shot0010.jpg)

[![Trees screenshot 2](/images/trees/mpv-shot0011.jpg)](/images/trees/mpv-shot0011.jpg)

[![Trees screenshot 3](/images/trees/mpv-shot0012.jpg)](/images/trees/mpv-shot0012.jpg)

[![Trees screenshot 4](/images/trees/mpv-shot0013.jpg)](/images/trees/mpv-shot0013.jpg)

<iframe width="715" height="404" src="https://www.youtube.com/embed/f4zIOuDnpvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>