"use strict";

const api_url = "https://dummyjson.com/quotes/random";
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const nextQuote = document.querySelector(".nextBtn");
const twitter = document.querySelector(".twitter");
const copyBtn = document.querySelector(".copy");
const speech = document.querySelector(".speech");
const synth = speechSynthesis;

// Fetch quotes function
const getQuote = async function () {
  // Try to fetch quotes & authors and Catch error if can't fetch data
  try {
    const response = await fetch(api_url);
    let data = await response.json();
    quote.textContent = data.quote;
    author.textContent = data.author;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};
// Click event to nextQuote btn
nextQuote.addEventListener("click", () => getQuote(api_url));

// Share to twitter function
const tweet = function () {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.textContent +
      "---- By " +
      author.textContent,
    "Tweet Window",
    "width=600, height=300"
  );
};
twitter.addEventListener("click", () => tweet());

// Copy Quote function
const copyText = function () {
  navigator.clipboard.writeText(quote.textContent);
  alert("Quote has been copied");
};
copyBtn.addEventListener("click", () => copyText());

// Read quote function
const textToSpeech = function () {
  let utterance = new SpeechSynthesisUtterance(
    `${quote.textContent} by ${author.textContent}`
  );
  synth.speak(utterance);
  setInterval(() => {
    !synth.speaking
      ? speech.classList.remove("active")
      : speech.classList.add("active");
  }, 10);
};
speech.addEventListener("click", () => textToSpeech());
