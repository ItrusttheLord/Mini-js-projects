let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
const body = document.querySelector("body");
const modeSwitch = document.querySelector(".mode-switch");
const icon = document.getElementById("icon");

// Get Time and
setInterval(() => {
  // get current time and calculate rotation
  let d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let hr_rotation = 30 * hr + min / 2;
  let min_rotation = 6 * min;
  let sec_rotation = 6 * sec;

  // change style of the hands to start rotating every second
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// change theme
const changeMode = function () {
  // added the dark class to the body
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icon.src = "assets/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "assets/moon.png";
    localStorage.setItem("theme", "light");
  }
};

// add click to the switch btn and call the change mode funct
modeSwitch.addEventListener("click", () => changeMode());

// save data to local storage
let localData = localStorage.getItem("theme");

// display data
const displayData = function () {
  if (localData === "light") {
    icon.src = "assets/moon.png";
    document.body.classList.remove("dark");
  } else if (localData === "dark") {
    icon.src = "assets/sun.png";
    document.body.classList.add("dark");
  }
};
displayData();
