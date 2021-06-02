---
title: 'Power Hour Buddy'
description: 'QHacks project to create custom power hour playlists using the Spotify API'
startDate: '2021-01-22'
endDate: '2021-01-24'
icon: '/projects/power-hour-buddy/icon.jpg'
---

View [source code](https://github.com/brianarthur/qhacks-21) in GitHub.

View [project demo](https://power-hour-buddy.herokuapp.com/).

Main technologies: **React**, **Python**, **Flask**, **Spotify API**, **Youtube URL**

## Project Background
Project for the Queen's Hackathon (QHacks) 2021. This hackathon was a *unique* experience with the pandemic and being online. Though me and my roomates particpated and made it a fun weekend staying up all night working on a fun and different project.

A little background about the idea, being in lockdown and unable to attend any bars/parties can be *challenging* for a house full of university students. We had spent many weekend nights drinking and watching one powerhour video on repeat. The powerhour video plays 60 popular music videos for one minute each while completing a powerhour challenge. 

#### Definition
`powerhour | noun | pronunciation: ˈpau̇(-ə)r ˈau̇(-ə)r`

`an hour where you consume 60 shots of beer, one-per-minute`

**Our solution was to create custom playlists which will be unique every time.**

## Project Description
Our project is a Python Flask app to host our React SPA frontend and serve API endpoints to create playlists and provide Youtube video URLs.

The user is able to link a Spotify account to access their existing playlists and utilize Spotify APIs for searching songs and artists. The user is then able to start adding any songs to a custom playlist. Once they are happy with their song selections they can move forward to play their custom playlist. 

During this stage the playlist is submitted to the backend Flask application which creates a new Sportify playlist for the user which they are able reuse on future uses. The playlist is populated with all of the songs that the user selected. If the user did not select 60 songs then it starts to populate the remaining 60 songs using the Spotify recommendations API which is seeded by the user selected songs.

Then the application will generate a list of Youtube URLs containing the one minute clips for each music video. This is done through the Youtube API and searching for 'Official Music Video'. The list of URLs is returned to the user through API requests and then played through HTML iFrame elements.

#### Select Spotify user songs
![Website home](/projects/power-hour-buddy/home.png)

#### Play your custom Power Hour plylist
![Enjoy your playlist](/projects/power-hour-buddy/playlist.png)
