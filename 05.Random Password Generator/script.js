"use strict";
const container = document.querySelector(".container");
const passwordBox = document.querySelector(".password-box input");
const copyBtn = document.getElementById("copyBtn");
const rangeInput = document.querySelector(".range-box input");
const genBtn = document.querySelector(".gen-btn");
const sliderNumber = document.querySelector(".range-box .slider-number");

// define all charcts
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+={[}]|:;'<,>.?";

// add all charcts
const allCharcts = upperCase + lowerCase + number + symbol;

//this function will be called on, page reload, generateButton clicked & rangeInput slide
const generatePassword = function () {
  let newPass = "";

  // for loop will run till range input value
  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumber = Math.floor(Math.random() * allCharcts.length);
    newPass += allCharcts[randomNumber];
  }
  passwordBox.value = newPass;
};

rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});

// copy passInput with the copyIcon
copyBtn.addEventListener("click", () => {
  alert("Password copied");
  navigator.clipboard.writeText(passwordBox.value);
});

generatePassword();
genBtn.addEventListener("click", generatePassword);
