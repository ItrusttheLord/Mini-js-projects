"use strict";

let left = document.getElementById("left");
let right = document.getElementById("right");
let lists = document.getElementsByClassName("list");

let listArray = Array.from(lists); //convert htmlCollection into an array

// select each list
listArray.forEach((list) => {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    //add draggin class to apply styles declared in the css
    setTimeout(() => list.classList.add("dragging"), 0);

    // allow items to move to right box
    right.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    right.addEventListener("drop", function (e) {
      if (selected) {
        right.appendChild(selected);
      }
      selected = null;
    });

    // Allow items to be move to the left box
    left.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    left.addEventListener("drop", function (e) {
      if (selected) {
        left.appendChild(selected);
      }
      selected = null;
    });
  });
  // remove styles after finishing dragging
  list.addEventListener("dragend", () => {
    list.classList.remove("dragging");
  });
});
