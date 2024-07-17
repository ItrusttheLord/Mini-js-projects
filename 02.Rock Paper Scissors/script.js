"use strict";

const gameContainer = document.querySelector(".container");
const userResults = document.querySelector(".user-result img");
const cpuResults = document.querySelector(".cpu-result img");
const result = document.querySelector(".result");
const optionImage = document.querySelectorAll(".option-image");

let score = 0;
let userScore = 0;
let cpuScore = 0;

optionImage.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    img.classList.add("active");

    userResults.src = cpuResults.src = "images/rock.png";
    result.textContent = "Wait...";

    optionImage.forEach((img2, index2) => {
      index !== index2 && img2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    //timeout to delay result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      //get the source of the clicked opt img
      let imageSrc = e.target.querySelector("img").src;

      //set the user img to the clicked opt
      userResults.src = imageSrc;

      //generate number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);

      // create arr of cpu images opts
      let cpuImags = [
        "image/rock.png",
        "images/papaer-removebg-preview.png",
        "images/download__1_-removebg-preview.png",
      ];
      // set cpu to cpuImgs in order to get random options from array
      cpuResults.src = cpuImags[randomNumber];

      //assign letter value to cpu opt
      let cpuValue = ["R", "P", "S"][randomNumber];

      // assign letter value to the clicked opt
      let userValue = ["R", "P", "S"][index];

      //create obj with possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      // look up the outcome value based on user and cpu options
      let outComeValue = outcomes[userValue + cpuValue];

      // display results
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});
