"use strict";
const inputBox = document.querySelector(".inputBox");
const input = document.getElementById("password");
const eyeIcon = document.querySelector(".eyeIcon");
const arrowBtn = document.getElementById("arrowIcon");
const msg = document.getElementById("msg");
const msgStrength = document.getElementById("strength");

input.focus();

const checkPassword = function () {
  if (input.value.length > 0) {
    msg.style.display = "block";
    eyeIcon.style.display = "block";
  } else {
    msg.style.display = "none";
    eyeIcon.style.display = "none";
  }

  if (input.value.length < 4) {
    msgStrength.innerHTML = "WEAK";
    input.style.borderColor = "red";
    msg.style.color = "red";
  }

  if ((input.value.length >= 4) & (input.value.length < 8)) {
    msgStrength.innerHTML = "MEDIUM";
    input.style.borderColor = "orange";
    msg.style.color = "orange";
  }

  if (input.value.length >= 8) {
    msgStrength.innerHTML = "STRONG";
    input.style.borderColor = "green";
    msg.style.color = "green";
  }
};

input.addEventListener("input", checkPassword);

eyeIcon.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.src = "assets/images/eye-open.png";
  } else {
    input.type = "password";
    eyeIcon.src = "assets/images/eye-close.png";
  }
});
