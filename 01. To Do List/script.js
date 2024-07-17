"use strict";
const addBtn = document.querySelector(".add-note-btn");
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
const input = document.querySelector("input");

const addTask = function () {
  if (inputBox.value === "") {
    alert("You Must Write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

addBtn.addEventListener("click", () => addTask());

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

const saveData = function () {
  localStorage.setItem("notes", listContainer.innerHTML);
};

const displayData = function () {
  listContainer.innerHTML = localStorage.getItem("notes");
};
displayData();
