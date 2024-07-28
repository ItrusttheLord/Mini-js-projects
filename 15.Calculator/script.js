"use strict";
// select all elements from the html
let display = document.querySelector(".display input");
const acBtn = document.querySelector(".ac");
const deleteBtn = document.querySelector(".de");
const decimalBtn = document.querySelector(".decimal");
const divisionBtn = document.querySelector(".division");
const multiBtn = document.querySelector(".multi");
const minusBtn = document.querySelector(".subtr");
const addBtn = document.querySelector(".add");
const equalBtn = document.querySelector(".equal");

const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector(".four");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const zero = document.querySelector(".zero");
const zeroZero = document.querySelector(".zero-zero");

// clear everything when AC is clicked
acBtn.addEventListener("click", () => (display.value = ""));
// Delete one element add the time when DE is clicked
deleteBtn.addEventListener(
  "click",
  () => (display.value = display.value.toString().slice(0, -1))
);
// Add click event to all the numbers and operators
decimalBtn.addEventListener("click", () => (display.value += "."));
divisionBtn.addEventListener("click", () => (display.value += "/"));

multiBtn.addEventListener("click", () => (display.value += "*"));
minusBtn.addEventListener("click", () => (display.value += "-"));
addBtn.addEventListener("click", () => (display.value += "+"));

nine.addEventListener("click", () => (display.value += "9"));
eight.addEventListener("click", () => (display.value += "8"));
seven.addEventListener("click", () => (display.value += "7"));
six.addEventListener("click", () => (display.value += "6"));
five.addEventListener("click", () => (display.value += "5"));
four.addEventListener("click", () => (display.value += "4"));
three.addEventListener("click", () => (display.value += "3"));
two.addEventListener("click", () => (display.value += "2"));
one.addEventListener("click", () => (display.value += "1"));
zero.addEventListener("click", () => (display.value += "0"));
zeroZero.addEventListener("click", () => (display.value += "00"));

equalBtn.addEventListener("click", () => solve());

// When the = btn is clicked the input will clear everything and display only the results
function solve() {
  let x = display.value;
  let y = eval(x);
  display.value = y;
  return y;
}
