"use strict";

const inputCelcius = document.getElementById("celcius");
const inputFahrenheit = document.getElementById("fahrenheit");

// set focus to the celcius input when page loads
window.addEventListener("load", inputCelcius.focus());

// convert celcius to F when Celcius value changes
inputCelcius.addEventListener("input", () => {
  inputFahrenheit.value = ((inputCelcius.value * 9) / 5 + 32).toFixed(2);

  // clear inputFahrenheit after clearing inputCelcius
  if (!inputCelcius.value) inputFahrenheit.value = "";
});

// convert F to C when value changes
inputFahrenheit.addEventListener("input", () => {
  inputCelcius.value = (((inputFahrenheit.value - 32) * 5) / 9).toFixed(2);

  // clear inputCelcius after clearing inputFahrenheit
  if (!inputFahrenheit.value) inputCelcius.value = "";
});
