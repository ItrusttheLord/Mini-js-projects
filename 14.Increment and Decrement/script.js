"use strict";

const minusBtn = document.querySelector(".minus");
const numEl = document.querySelector(".number");
const addBtn = document.querySelector(".add");

let number = 0;

minusBtn.addEventListener("click", () => {
  if (number > 0) {
    number--;
    numEl.textContent = number;
  }
  minusBtn.disabled = true;
});

addBtn.addEventListener("click", () => {
  number++;
  numEl.textContent = number;
});
