# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This is an applicatin to calculate your age according to the to the birth day that you have provided in the application.

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Links

- Solution URL: [Add solution URL here](https://github.com/Akshidhan/Age-Calculating-App/tree/main)
- Live Site URL: [Add live site URL here](https://akshidhan.github.io/Age-Calculating-App/)

## My process

I started with styling the web application first
Then I planned that I should make 2 components for user input and displaying the calculated age
Then I started with coding the logics for calculating the age of the user
Then I combined everything with the main App component

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to properly pass props to a component

To see how you can add code snippets, see below:

```js
<DisplayDate data={foundDate} />
```

## Author
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Akshidhan)
