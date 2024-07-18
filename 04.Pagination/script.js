"use strict";

const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const prevNext = document.querySelectorAll(".prevNext");
const numbers = document.querySelectorAll(".link");

// setting initial number
let currentNum = 0;

// update the button states
const updateBtn = function () {
  // add DISABLED to endbtn of we are at the end
  if (currentNum === 4) {
    endBtn.disabled = true;
    prevNext[1].disabled = true;
  } else if (currentNum === 0) {
    // if we are at the 1st num add disabled
    startBtn.disabled = true;
    prevNext[0].disabled = true;
  } else {
    endBtn.disabled = false;
    prevNext[1].disabled = false;
    startBtn.disabled = false;
    prevNext[0].disabled = false;
  }
};

// add click events to the numbers
numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();

    // set the curr num to the clicked numb 1
    currentNum == numIndex;

    // remove active class
    document.querySelector(".active").classList.remove("active");

    // add the 'active' to the clicked number
    number.classList.add("active");
    // update teh btn states
    updateBtn();
  });
});

//  add click event to prev and next
prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    // increase or decrease the curr num
    currentNum += e.target.id === "next" ? 1 : -1;

    numbers.forEach((number, numIndex) => {
      // toggle the active class on the numb lin based on the curr num
      number.classList.toggle("active", numIndex === currentNum);
      updateBtn(); //update btn states
    });
  });
});

startBtn.addEventListener("click", () => {
  // remove active from previous numb
  document.querySelector(".active").classList.remove("active");

  // add active to the last number link
  numbers[0].classList.add("active");
  currentNum = 0;
  updateBtn();
  endBtn.disabled = false;
  prevNext[1].disabled = false;
});

endBtn.addEventListener("click", () => {
  // remove active from previous numb
  document.querySelector(".active").classList.remove("active");

  // add active to the last number link
  numbers[4].classList.add("active");
  currentNum = 4;
  updateBtn();
  startBtn.disabled = false;
  prevNext[0].disabled = false;
});
