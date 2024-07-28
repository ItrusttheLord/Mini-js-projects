"use strict";
const displayTime = document.getElementById("display-time");
const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

// create array with the time
let [count, seconds, minutes, hours] = [0, 0, 0, 0];
// define timer as null || false;
let timer = null;

// Create stopWatch function
const stopWatch = function () {
  // add one to count
  count++;
  // if count = 100? secs will go up by one and count will start from 0
  if (count === 100) {
    seconds++;
    count = 0;
  }
  // if secs = 60? mins will go up by one and secs will start from 0
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  // if mins = 60? hours will go up by one and mins will start from 0
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  // if any time is less than 10 it will add another zero so instead of displaying this '0:0:0:0' > '00:00:00:00'
  let h = hours < "10" ? "0" + hours : hours;
  let m = minutes < "10" ? "0" + minutes : minutes;
  let s = seconds < "10" ? "0" + seconds : seconds;
  let c = count < "10" ? "0" + count : count;

  // add ^ to the html elements
  displayTime.innerHTML = h + ":" + m + ":" + s + ":" + c;
};

// define the function for the startBtn
const watchStart = function () {
  // if timer is not null start timer at every millisecond
  if (timer !== null) {
    clearInterval();
  }
  timer = setInterval(stopWatch, 10);
};

// function for the StopBtn
const watchStop = function () {
  // stop interval at the current time that is at
  clearInterval(timer);
};

// function for the resetBtn
const wathcReset = function () {
  // Stop timer and clear timer : return evething to zero
  clearInterval(timer);
  [count, seconds, minutes, hours] = [0, 0, 0, 0];
  displayTime.innerHTML = "00:00:00:00";
};

startBtn.addEventListener("click", watchStart);
stopBtn.addEventListener("click", watchStop);
resetBtn.addEventListener("click", wathcReset);
