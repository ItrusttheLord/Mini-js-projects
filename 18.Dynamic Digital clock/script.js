const hrsEl = document.getElementById("hrs");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

setInterval(() => {
  const now = new Date();

  hrsEl.innerHTML = (now.getHours() < 10 ? "0" : "") + now.getHours();
  minEl.innerHTML = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
  secEl.innerHTML = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
}, 1000);
