"use strict";

const submitBtn = document.querySelector(".submit-btn");
const dimissBtn = document.querySelector(".dismiss-btn");
const emailInput = document.querySelector("#emailAddress");
const errorMsg = document.querySelector(".error");
const successWrap = document.querySelector(".success-wrap");
const mainContainer = document.querySelector(".wrapper");

function checkValidEmail() {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let emailAddress = emailInput.value;

  if (!regex.test(emailAddress)) {
    showErrors();
    hideErrors();
  } else {
    return true;
  }
}

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
