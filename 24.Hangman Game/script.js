"use strict";
import { wordList } from "./wordList.js";
// game-modal elms
const gameModal = document.querySelector(".game-modal");
const contentImgEl = document.querySelector(".content img");
const contentH4El = document.querySelector(".content h4");
const contentPEl = document.querySelector(".content p");
const playAgainBtn = document.querySelector(".play-again");
// contianer elements
const hangmanImgEl = document.querySelector(".hangman-box img");
// gameBox elms
const wordDisplayEl = document.querySelector(".word-display");
const hintTextEl = document.querySelector(".hint-text b");
const guessesTextEl = document.querySelector(".guesses-text b");
const keyboardEl = document.querySelector(".keyboard");

let currentWord;
let currentHint;
let wrongGuessCount = 0;
const maxGuesses = 6;
let correctLetters = [];

// Creating keyboard btns
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardEl.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

// Reset game function
const resetGame = function () {
  // reset everything
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImgEl.src = `images/hangman-${wrongGuessCount}.svg`;
  guessesTextEl.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  // we remove the disabled property to every button on the keyboard
  keyboardEl
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
  // first we split the word letter by a space then we create a li el for each letter and then we finally join them again once the letter complete
  wordDisplayEl.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  // we remove the class 'show' so once we click on the play again btn the it hides it
  gameModal.classList.remove("show");
};
// Get random word function
const getRandomWord = function () {
  // allows us to get random word and hint
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  // console.log(currentWord);
  currentHint = hint;
  hintTextEl.innerHTML = currentHint;
  // we called the resetGame() to reset everything
  resetGame();
  // We remove this and we move to the resetGame()
  // wordDisplayEl.innerHTML = word
  //   .split("")
  //   .map(() => `<li class="letter"></li>`)
  //   .join("");
};
getRandomWord();

// Start game function
const initGame = function (button, clickedLetter) {
  if (currentWord.includes(clickedLetter)) {
    // we expand each word into each individual letter using the spread operator
    [...currentWord].forEach((letter, index) => {
      // if letter is clicked
      if (letter === clickedLetter) {
        // if is correct we push the letter
        correctLetters.push(letter);
        // we push the letter into li element and display it
        wordDisplayEl.querySelectorAll("li")[index].innerText = letter;
        wordDisplayEl.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    // if the letter is incorrect we increase the wrong guess count and also begin to display the img of the hang man
    wrongGuessCount++;
    hangmanImgEl.src = `images/hangman-${wrongGuessCount}.svg`;
  }
  // after the btn is clicked we disabled btn we display how many times we have we have guess the wrong letter
  button.disabled = true;
  guessesTextEl.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  // calling the gameOver() if any of these two condition meets
  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

const gameOver = function (isVictory) {
  setTimeout(() => {
    const modalText = isVictory
      ? `You found the correct word:`
      : `The correct word was:`;
    // change the gifs
    contentImgEl.src = `images/${isVictory ? "victory1" : "lost"}.gif`;
    contentH4El.innerText = `${isVictory ? "Congrats!" : "Game Over!"}`;
    contentPEl.innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
};

playAgainBtn.addEventListener("click", getRandomWord);
