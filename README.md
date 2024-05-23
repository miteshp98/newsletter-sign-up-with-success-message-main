# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![mobile](https://github.com/miteshp98/newsletter-sign-up-with-success-message-main/assets/145320555/72277795-d3ef-4812-a8b9-9b3eda596e67)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [ solution URL ](https://github.com/miteshp98/newsletter-sign-up-with-success-message-main)
- Live Site URL: [ live site URL ](https://miteshp98.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

## Technologies Used

- HTML
- CSS (Flexbox)
- JavaScript

## Validation Features

- **Email Validation:** Ensures the email address entered is in the correct format.

What I'm Most Proud Of
I am proud because I did all of this by myself. This project allowed me to:

- Gain hands-on experience with CSS Flexbox to create a responsive layout.
- Implement hover effects to improve the user interface.
- Develop JavaScript skills for form validation.

```js
function showErrors() {
  errorMsg.classList.add("visible");
  emailInput.classList.add("input-error");
}

function hideErrors() {
  setTimeout(() => {
    errorMsg.classList.remove("visible");
    emailInput.classList.remove("input-error");
  }, 3000);
}

function successElement() {
  mainContainer.style.display = "none";
  successWrap.classList.add("success-visible");
}

function reset() {
  mainContainer.style.display = "flex";
  successWrap.classList.remove("success-visible");
}

submitBtn.addEventListener("click", function (e) {
  const isEmailValid = checkValidEmail();

  if (!isEmailValid) {
    e.preventDefault();
  } else {
    successElement();
  }
});

dimissBtn.addEventListener("click", function () {
  reset();
  emailInput.value = "";
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
