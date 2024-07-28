"use strict";

const downloadBtn = document.querySelector(".download-btn");
const icon = document.querySelector(".icon");
const text = document.querySelector(".text");
const fileLink =
  "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

const initTimer = function () {
  // if it contains the class it will download that item
  if (downloadBtn.classList.contains("disabled-timer")) {
    return (location.href = fileLink);
  }
  // we get access to dataset because we declared it in the html file
  let timer = downloadBtn.dataset.timer;
  downloadBtn.classList.add("timer");
  downloadBtn.innerHTML = `Your file will begin to download in <b>${timer}</b> seconds`;

  // init counter
  const initCounter = setInterval(() => {
    if (timer > 0) {
      timer--;
      return (downloadBtn.innerHTML = `Your file will begin to download in <b>${timer}</b> seconds`);
    }
    clearInterval(initCounter);
    location.href = fileLink;
    downloadBtn.innerHTML = "Your file is downloading...";

    setTimeout(() => {
      downloadBtn.classList.replace("timer", "disable-timer");
      downloadBtn.innerHTML = `<span><i class="fa-solid fa-check"></i></span>
      <span class'text'>Your file has been downloaded</span>`;
    }, 3000);
  }, 1000);
};

downloadBtn.addEventListener("click", initTimer);
