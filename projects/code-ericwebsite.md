---
title: 'CODE // ERICWEBSITE'
tags: ['code', 'web', 'next.js', 'typescript', 'react', 'scss']
blurb: 'I made the website that you are currently using. It is a static <b>Next.js</b> app written in <b>TypeScript</b>'
imgSrc: '/images/next_logo.webp'
videoSrc: '/videos/next.webm'
bannerSrc: '/images/next-banner.webp'
imgWidth: 1280
imgHeight: 400
imgScale: 0.33
---

## Purpose

I needed a new website to show off my software projects. To do it I had three major considerations: I wanted to use a cutting edge framework, I wanted it to be simple to set up and maintain, and I wanted to to be fast.

**Next.js** was an obvious choice particularly because of it's ability to render out static content which means I can serve my pages fast while cutting down on complexity. I like Next, it provides all the power of **React** but with a lightly enforced structure that I find very sensible in addition to a variety of useful tools for development and production all in a very sleek package.

## Features

In terms of content I had very basic needs for my portfolio page. I wanted to be able to provide a brief introduction and then a list of my projects with highlight information that could be looked into further. On the content development side of things I wanted to be able to add to and update all of this information easily. Next.js's dynamic routing and static page generation combined with the **remark markdown** parser made this very simple. 

All the content is written in markdown. In order to add new content all that I need to do is to create a new file and then rebuild the project. I use **git** for **continuous deployment**, once I have committed a new version to the GitHub repository an action is run on my **Digital Ocean droplet** to pull down the changes and rebuild the site for production.

I wanted the page to be both modern and unique, reflecting my personal stlye, and to be reactive. I use **SCSS** to style all of my pages. SCSS is great for many reasons but specifically I like it because it makes writing modular **CSS** much easier. Next supports SCSS and SASS natively and so it was an easy choice to go for the more feature rich option.

## Technology

I use **Next.js** as my framework. All the templates and logic are written as **React** components using **TypeScript**. I like TypeScript because I always know what the data that I am working with is and it keeps down on cognitive load. It also helps avoid hard to track down bugs that can easily sneak through on less strongly typed languages.

Since Next.js provides static page compilation and my portfolio will not change frequently I can keep things simple by eschewing the need for a database and an API. This has the additional outcome of being very fast to serve as each page can be cached and theres no need to wait for an AJAX call on page load. 

All of my web services are run out of **Docker** containers on my **Digital Ocean** droplet using **NGINX** to serve static content and as a reverse proxy. For this project I have a workflow set up such that when I commit new versions of the portfolio site to GitHub they are drawn down to my droplet, compiled, and immediately made available.

## Screenshots

**TODO: TAKE SCREENSHOTS AFTER DONE EVERYTHING ELSE**