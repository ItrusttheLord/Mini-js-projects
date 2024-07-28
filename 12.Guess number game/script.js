"use strict";

// Select HTML elms
const againBtn = document.querySelector(".again");
const guessNumber = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const guessField = document.querySelector(".guesses");
const guessLeftField = document.querySelector(".guessesLeft");
const message = document.querySelector(".message");
let inputField = document.querySelector(".guess");

let guessCount = 0;
let guessesLeft = 8;

// focus on input field when page loads
inputField.focus();

// Returns random number between 1 and 20
let randomNum = Math.floor(Math.random() * 20) + 1;

const checkGuess = function () {
  const userGuess = Number(inputField.value);

  // Different scenerios
  if (userGuess === randomNum) {
    message.textContent = "CONGRATULATIONS!! YOU GOT IT RIGHT!";
    // Displays the number on the ? box in the wbs
    guessNumber.textContent = randomNum;
    // Change bgc when user wins
    document.querySelector("body").style.backgroundColor = "#60b347";
    guessNumber.style.width = "30rem";
    // Disabled input and btn the game ends
    inputField.disabled = true;
    checkBtn.disabled = true;
  }
  // Add 1 to guesscount && Subtract 1 to guessleft
  if (userGuess < randomNum) {
    message.textContent = "Too Low!";
    guessCount++;
    guessField.textContent = guessCount;

    guessesLeft--;
    guessLeftField.textContent = guessesLeft;
  }
  if (userGuess > randomNum) {
    message.textContent = "Too High!";
    guessCount++;
    guessField.textContent = guessCount;

    guessesLeft--;
    guessLeftField.textContent = guessesLeft;
  }
  // If you don't guess Number with the attempts you have you
  if (guessesLeft === 0) {
    message.textContent = "You Lost Try Again!!";
    // change bgc
    document.querySelector("body").style.backgroundColor = "red";
    //  Display correct Number to tehe box container
    guessNumber.textContent = randomNum;
    // disabled fields
    inputField.disabled = true;
    checkBtn.disabled = true;
  }
};
// Click event to the check btn
checkBtn.addEventListener("click", checkGuess);

// Reset game whe click on the Try again Btn
againBtn.addEventListener("click", () => {
  guessCount = 0;
  guessesLeft = 8;
  randomNum = Math.floor(Math.random() * 20) + 1;

  // reset msg, guessField, GuessCount, guessNumber box to '?', inputfield, bgc, size of the guessNumber box, and undisabled fields.
  message.textContent = "Start guessing...";
  guessField.textContent = guessCount;
  guessLeftField.textContent = guessesLeft;
  guessNumber.textContent = "?";
  inputField.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  guessNumber.style.width = "15rem";
  inputField.disabled = false;
  checkBtn.disabled = false;
});
