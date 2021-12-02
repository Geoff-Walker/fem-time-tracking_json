# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). I personally find Frontend Mentor challenges help me develop my code by working in a manner closer to professional contracts. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
Personally I am a fan of working through new features using lectures and tutorials the only problem with this is it can leave you short of the experience needed to undertake completetly different work.  For this reason I am a massive fan of Frontend Mentor as I see these as a hard test, to see if I can now do this alone and be professionally useful.

This challenge for me was all about getting data out of a JSON file and using a DOM Algorithm to update the page based on the JSON data.  To this end I am delighted that I managed to complete the challenge and get a nice outcome.  

I also admit with shame that while I havce known for a while now mobile first is the way to build.  I have been building in desktop first and then starting a new file implementing that desktop first process in a mobile first way.  This is really inefficient and bad practice on my part so this project will be my first all mobile first method.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats using JSON data

### Screenshot

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/Geoff-Walker/fem-time-tracking_json](https://github.com/Geoff-Walker/fem-time-tracking_json)
- Live Site URL: [https://geoff-walker.github.io/fem-time-tracking_json/](https://geoff-walker.github.io/fem-time-tracking_json/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Local JSON data

### What I learned
After completing this project in mobile first work flow I have seen first hand, how much more efficient this is.  Both in terms of time and decreasing the codebase of the project, its something I will look to continue to do going forward.

I have also learned a lot about the fetch API and loading and using JSON data.

### Continued development

JSON Data and the fetch API confused me especially when I couldn't access the variable outside of the fetch function or a function that referenced it.  Even when I created this as a var to get global functionality.  I always got a promise returned and while I know thats right, I don't yet understand why after parsing it in I couldn't see it.  For this reason I had to use a little help in getting access to the JSON data.  This really frustrated me and it was only something I did after spending hours trying myself.  

JSON, Fetch API, ASYNC AWAIT are all things while I understand and would back myself to complete, are things that I need to continue to develop with.

Also with experience comes answers but this is the one project I have completed on Frontend Mentor where I couldn't get a fully responsive layout implented.  I ruled out it being the algorithm but never did bottom out why it remained fixed width despite everything I could see and access in the inspector telling me it should grow.  I tried min-widths and 100% but it never responded, I had a work through stackoverflow solutions but never found one that made a difference even if set to inline block.

I fealt as the design works on all devices the fixed pixel layout was not a huge issue with the three media queries written.


### Useful resources

- [Youtube Tutorial](https://www.youtube.com/watch?v=AtWjtiayOsI&t=48s) - This video helped me understand the process of accessing the JSON data I already had the algorithm and had managed to push that on a little from the attached solution by using a ternary operator to either give hr or hrs.  Shamefully though the section on JSON and the Fetch API was really really useful.


## Author

- Website - [Geoff Walker](https://www.geoff-walker.io)


