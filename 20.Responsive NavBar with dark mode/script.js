"use strict";
const searchIcon = document.getElementById("search-icon");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector(".navCloseBtn");
const openBtn = document.querySelector(".navOpenBtn");

const changeTheme = document.querySelector(".changeTheme");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

// click event on the searchIcon
searchIcon.addEventListener("click", () => {
  // we add the openSearch class to the nav
  nav.classList.toggle("openSearch");
  // we remove this class from the nav which we added to the openTheme class this cladd will only be added depending on the screen size
  nav.classList.remove("openNav");

  // We replace the searchIcon with the CloseBtn icon whix is an 'x' and we don't have to add the click event top the closeBtn because it inherits it from the searchIcon which wich we already call basically it raplace it.
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("fa-magnifying-glass", "fa-xmark");
  }
  return searchIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
});

// click event to openBtn this openBtn will only appear depending on the screen size
openBtn.addEventListener("click", () => {
  // we added openNav class which we called it in the css and we also need to remove this openNav class on the searchIcon event ^^
  nav.classList.toggle("openNav");
  // We had to add click event to the 'x' icon because here it doesn't replaces the searchIcon therefore we need to add it
  closeBtn.addEventListener("click", () => nav.classList.remove("openNav"));
});

// change the theme from light to dark
changeTheme.addEventListener("click", () => {
  // We added these classes to the body,nav,navlinks
  body.classList.toggle("background");
  nav.classList.toggle("root");
  navLinks.classList.toggle("root");

  // Change icons when we click on them
  if (
    body.classList.contains("background") &&
    nav.classList.contains("root") &&
    navLinks.classList.contains("root")
  ) {
    changeTheme.src = "assets/images/sun.png";
  } else {
    changeTheme.src = "assets/images/moon.png";
  }
});
