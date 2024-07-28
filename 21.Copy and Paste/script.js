"use strict";

const textBox = document.getElementById("textBox");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
  textBox.select();
  navigator.clipboard.writeText(textBox.value);

  alert("The text has been copied");
});
