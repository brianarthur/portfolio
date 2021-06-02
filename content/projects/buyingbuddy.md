---
title: 'Buying Buddy'
description: 'Ecommerce marketplace to bring together customers and local businesses'
startDate: '2020-06-15'
endDate: 'Present'
icon: 'projects/buying-buddy/icon.png'
---

View [project demo](https://www.buyingbuddy.ca/). Will need to use a Kingston address in order to see any test store information. Try using the address *100 Princess Street, Kingston, ON* to test the application.


Main technologies: **Python**, **Django**, **Django Rest Framework**, **React**, **Google Maps API**, **PostGIS**

## Project Background
At the beginning of the pandemic, I started working on a business idea with Mo, a friend of a friend at Queen's. Mo had the initial idea of creating an ecommerce marketplace to bring together customers and local businesses. The goal was to create an online marketplace where customers can view local nearby businesses, complete an online order, and have orders delivered quickly in 1-2 days. 

Mo needed help on the technical side and brought me in to get started and develop features of the application. He didn't have the same level of technical skills yet I wanted to make sure he understood some of the early project decisions and be a part of feature development. Early decisions include looking at different backend and frontend frameworks. This required me to have a **strong understanding** of many new areas to be able to fully explain advantages, future project development and my decision-making process to someone without the same levels of web development knowledge.

Some of the project requirements include:
- Add and view multiple stores in nearby locations
- Stores must have unique product inventories
- Customers can complete an order at nearby stores
- Checkout process which is fast and easy to use

## Development
The development process can be split into two different phases: phase 1 during Summer 2020 and phase 2 during Summer 2021. Between these two periods was the school year with less free time. However, we spent time testing the application and reaching out to stores in Kingston for potential clients and to receive feedback about the product.

Some of the frameworks I researched include Python Django, Ruby on Rails, PHP and frontend frameworks include React and Angular. Discussing with Mo we settled on the Django framework serving REST APIs and a React frontend. This offered a quick and easy setup process and less of a learning curve for me as I was familiar with Python and React.

### Phase 1
Initial development included designing each of the models for store and product ecommerce information. Some of the unique features include the use of [**GeoDjango**](https://docs.djangoproject.com/en/3.2/ref/contrib/gis/tutorial/#introduction) and **keeping track of payment methods**. 

GeoDjango adds support for geographic web applications. We use Google Map APIs to handle all address lookups and address autocomplete features however the use of GeoDjango makes it very easy to create database queries that are conditioned on store distance. One of the features we wanted to implement was that a **customer only sees stores in an x kilometre radius**. GeoDjango allows us to easily query stores that are within a distance of x kilometres using coordinates of stores and the customer location. 

We chose Stripe as the initial checkout payment handler as it was easy to get set up, provides great reporting tools on their end, prebuilt React components and allows us to easily store user credit card information. We wanted returning users to be able to **quickly checkout using a one-click process**. Stripe is able to handle all credit card information on their end and we are able to access the information through APIs which minimizes security risk on our end.

The development of frontend features was completed with **agile sprints** in mind. This process allowed Mo to be a part of the development process and we could continuously develop new features. We would have weekly meetings going over new updates/progress and plan out work for the next week. Having continuous feedback allowed us to create each feature as desired.

### Phase 2
Development is still ongoing as we consider feedback from stores. We are currently **converting** the frontend React project into a **Next JS project** and transitioning to serve our APIs and admin through **subdomains**. Serving all entities on a single domain is a potential security issue, simplifies the use of different levels of authentication, and personally, I find `api.example.com` looks much nicer and neater than `example.com/api/` :).

## Deployment 
The application is currently served as a single application through Heroku and hosted at [buyingbuddy.ca](https://www.buyingbuddy.ca/). Deployment is automatic with new pushes and pull requests into the GitHub repo. My goal this summer is to implement a deployment workflow to ensure no broken code is pushed to the production server as the application continues to grow.

## Wrap Up 
This is the project I am most **proud** which I have worked on so far. I have learned so many new skills with Django, REST APIs, and project development lifecycle. I'm excited to continue working on the project this summer and I think there is real potential for the idea in the real world!