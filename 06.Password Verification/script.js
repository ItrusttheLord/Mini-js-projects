"use strict";

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-error");
const submitError = document.getElementById("submit-error");
const eyeIcons = document.querySelectorAll("#eyeIcon");

//  Email Validation
const validateEmail = function () {
  // Getting email input value
  let email = document.getElementById("contact-email").value;

  // If email is empty
  if (email.length === 0) {
    emailError.innerHTML = "Email Required";
    return false;
  }

  // If email doesn't matched with email pattern
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  // Adding the check mark is its correct
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

// Hide and Show Pass
eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    // getting parent element of eye icon
    const pInput = eyeIcon.parentElement.querySelector("input");

    // selection password input and changing the eye icon
    if (pInput.type === "password") {
      eyeIcon.src = "assets/eye-open.png";
      return (pInput.type = "text");
    }
    eyeIcon.src = "assets/eye-close.png";
    pInput.type = "password";
  });
});

// Password Validation
const validatePassword = function () {
  let password = document.getElementById("contact-password").value;

  // Password input empty
  if (password.length === 0) {
    passwordError.innerHTML = "Password Required";
    return false;
  }

  // Password don't have the required Charcts
  if (
    !password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
  ) {
    passwordError.innerHTML =
      "Password must contain number, symbol,lower an capital letter.";
    return false;
  } else {
    // Check mark icon if correct
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
};

// confirm Passwords
const confirmPass = function () {
  // Value of password and confirm
  let password = document.getElementById("contact-password").value;
  let cfpassword = document.getElementById("contact-confirm").value;

  if (password !== cfpassword || cfpassword === "") {
    confirmPasswordError.innerHTML = "Password Must Match";
    return false;
  }
  confirmPasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

// Validation form
const validateForm = function () {
  // If all any left blanck it will return this and it will disapear message in 3 seconds
  if (!validateEmail() || !validatePassword() || !confirmPass()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Fill the Required fields to Submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
};

// I declared all the keyup and click Events in the HTML file
