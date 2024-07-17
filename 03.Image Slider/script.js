"use strict";

const wrapper = document.querySelector(".wrapper");
const imgContainer = document.querySelector(".images");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".button");

let imgIndex = 1,
  intervalId;

// function to start img slider auto
const autoSlide = () => {
  // start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imgIndex), 2000);
};
autoSlide();

// updates the imgContainer display to show specified img
const slideImage = () => {
  // Calculate the update image index
  imgIndex =
    imgIndex === images.length
      ? 0
      : imgIndex < 0
      ? images.length - 1
      : imgIndex;

  // update the imaages container display to show the specified img
  imgContainer.style.transform = `translate(-${imgIndex * 100}%)`;
};

// updates imgcontainer display to show the next or prev img
const updateClick = (e) => {
  // stop the auto slideshow
  clearInterval(intervalId);

  // calculate the updated img index based on the button clicked
  imgIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imgIndex);

  // restart the auto slideshow
  autoSlide();
};

// click to the nav btns
buttons.forEach((btn) => btn.addEventListener("click", updateClick));

// mouseover event to wrapper el to stop auto slide
wrapper.addEventListener("mouseover", () => {
  clearInterval(intervalId);

  // mouseleave event to wrapper to start auto slide again
  wrapper.addEventListener("mouseleave", autoSlide);
});
