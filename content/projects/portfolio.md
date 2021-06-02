---
title: 'Portfolio'
description: 'Personal portfolio website built with Next JS'
startDate: '2021-05-10'
endDate: '2021-05-15'
icon: 'projects/portfolio/portfolio-icon.svg'
---

View [source code](https://github.com/brianarthur/portfolio) in GitHub.

View [project demo](https://www.brianarthur.tech/) (this website).

Main technologies: **Next JS**, **React**, **CSS**

## Project Background
This site is my first portfolio that I have created to display some of my projects and skills. I've had experience using React and knew this was the technology I wanted to use to showcase my abilities. 

I chose to create the project with Next JS as it offered great tools for defining site content in markdown files, then statically builds the required pages at build time. Creating static pages is unique to React and offers many advantages. Most of the page content is defined at build time and serves prebuilt HTML pages which improve client-side performance and improve SEO metrics.

This was my first time using Next JS and I plan on using it in a bigger project in the near future, so I figured this would be a great time to **learn** the framework and personally see the advantages of Next JS.

Previously, with React I have used a few component libraries including [Material-UI](https://material-ui.com/) and [React Bootstrap](https://react-bootstrap.github.io/) which makes it easy to get started and maintain an overall theme for the entire website. Though in this project my goal was to create well-documented custom components using React and CSS. 

## Project Description
One thing about working with React is there is no recommended file structure for projects and is left to the developer on a per-use case basis. One feature I like about Next JS is that all pages need to be defined in one location which also provides the routes. This makes working on Next JS projects **predictable** as you know exactly where to look for new projects.

A route of `/projects` is built from the file located at `/pages/projects.js` where you can quickly see all of the imported components and structure of the rendered page. 

All of the content for this page is static and Next JS offers great tools for separating the definition of page content and rendering each page. For example, all of my projects I can define the file `/pages/projects/[id].js` then any route of the form `/projects/[some-page-id-here]` will use this file to render its page. The content of this page is located in external markdown files which gets passed to the React component through the use of Next JS `getStaticProps`. Each page I define will construct each of these static pages with the predefined markdown content at build time and ensures **fast performance** when serving the page on the client-side. 