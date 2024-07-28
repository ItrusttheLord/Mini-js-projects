"use strict";

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

//  URl to send email after clicking subscribe the form will be send here
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxz-NAubjqMnFP0Zsv6zQuQuTWwQQsRNYiM9rv4_tT9iEwhaLEON5fcx5hjWjeCwDwUbQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

// Random Date we want for example the date your page will begin active
let countDown = new Date("Oct 16, 2024 00:00:00").getTime();

// Get the date function
let x = setInterval(function () {
  let now = new Date().getTime();

  // The current time will subrtact from the time we defined in the countdown
  let distance = countDown - now;

  // getting the exact number of days, hours, minutes and seconds
  const dateDays = Math.floor(distance / (1000 * 60 * 60 * 24));

  const dateHours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const dateMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const dateSeconds = Math.floor((distance % (1000 * 60)) / 1000);

  // displayin results in the website
  days.innerHTML = dateDays;
  hours.innerHTML = dateHours;
  minutes.innerHTML = dateMinutes;
  seconds.innerHTML = dateSeconds;

  // when the timer ends the website will display '00' for all
  if (distance < 0) {
    clearInterval(x);
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}, 1000);

// Adding Submit event so when clicked to the subscribe btn it then will send your information to google Forms
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      alert("Your subscription was sent!");
      setTimeout(() => {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
