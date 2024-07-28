"use strict";

const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".high-score");
const playBoardEl = document.querySelector(".play-board");
const controls = document.querySelectorAll(".controls i");

//Define the variables we are going to need
let gameOver = false;
let foodX, foodY;
let snakeX = 5,
  snakeY = 5;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// We get the highScore from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreEl.innerText = `HighScore: ${highScore}`;

// Food position
const updateFoodPosition = function () {
  // random value from 1-30 meaning the food will appear in any place either from the top or bottom
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

// Game Over function
const handleGameOver = function () {
  // Clear Interval && alert game over and once we press OK the game restarts
  clearInterval(setIntervalId);
  alert("Game Over! Press OK to play again...");
  location.reload();
};

// Change the direction of the snake using the arrowkeys
const changeDirection = function (e) {
  if (e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  }
  if (e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  }
  if (e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  }
  if (e.key === "ArrowRight" && velocityY != -1) {
    velocityX = 1;
    velocityY = 0;
  }
};

// Adding the click event to each btn this is only used form mobile screens or depending on the size of your device we used dataset because we defined it in the html
controls.forEach((button) =>
  button.addEventListener("click", () =>
    changeDirection({ key: button.dataset.key })
  )
);

// function to start the game
const initGame = function () {
  // if the gameOver we return the Handle function which will reset the game
  if (gameOver) return handleGameOver();

  // We add the div El which contains the class food which we style it in css we also insert it the the foodY and foodX positon
  let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  // If the snake eats the food the food will disappear and appear in a different place that's why we called the update function here
  if (snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
    // This allows the snake to eat the food and it gets bigger because we pushed to the snakeBody therefore it continues to grow
    snakeBody.push([foodY, foodX]);
    // increase score by one once the snake eats the food
    score++;
    // score is higher than Highscore it will return it as the new highscore otherwise it will keep the same highscore
    highScore = score >= highScore ? score : highScore;
    // We save only the highScrore to the local Storege and also update everytime we get new Score
    localStorage.setItem("high-score", highScore);
    // We insert the score and higscore to html elms so it can display them in the screen
    highScoreEl.innerText = `HighScore: ${highScore}`;
    scoreEl.innerText = `Score: ${score}`;
  }

  // Update the Snake head/body position based on its curr velocity
  snakeX += velocityX;
  snakeY += velocityY;

  // shifting forward teh value of the elms in the snake body by one
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  // setting first el of snake body to curr snake position
  snakeBody[0] = [snakeX, snakeY];

  // If the snake hits the wall the game is over
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    return (gameOver = true);
  }

  // Here we add div with the class head which we style it in css and this head will be added to each part of the snake when it gets bigger
  for (let i = 0; i < snakeBody.length; i++) {
    html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

    //if snake head hit its body the game ends
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      gameOver = true;
    }
  }
  // We add everything to the El we created in the html
  playBoardEl.innerHTML = html;
};

// we update the food position everytime the snake eats
updateFoodPosition();
// we set the interval and call the initGame to start game at a speed of 120
setIntervalId = setInterval(initGame, 120);
//this watches for clicks which allows to move the snake using the keys we defined in the initGame Function
document.addEventListener("keyup", changeDirection);
