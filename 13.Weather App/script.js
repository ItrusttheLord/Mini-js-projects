"use script";
const apiKey = "48958e0cfde10009843265f7320f23f2";
const api_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const searchInput = document.querySelector(".search input");
const searchIcon = document.querySelector(".search-icon");
const weatherIcon = document.querySelector(".weather-icon");
const cityEl = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const error = document.querySelector(".error");
const weatherDisplay = document.querySelector(".weather");

const apiKey2 = "2d034a1f904240a6550c748b20b31ac1";
const api_URL2 = "api.openweathermap.org/data/2.5/forecast?q=florida";

const fetchWeather = async function (city) {
  const response = await fetch(api_URL + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    error.style.display = "block";
    weatherDisplay.style.display = "none";
  }

  let data = await response.json();
  console.log(data);

  cityEl.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°F`;
  humidity.textContent = data.main.humidity + "%";
  wind.textContent = data.wind.speed + "mph";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "assets/images/clouds.png";
  }

  if (data.weather[0].main === "Clear") {
    weatherIcon.src = "assets/images/clear.png";
  }

  if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "assets/images/drizzle.png";
  }

  if (data.weather[0].main === "Mist") {
    weatherIcon.src = "assets/images/mist.png";
  }

  if (data.weather[0].main === "Rain") {
    weatherIcon.src = "assets/images/rain.png";
  }

  if (data.weather[0].main === "Snow") {
    weatherIcon.src = "assets/images/snow.png";
  }

  weatherDisplay.style.display = "block";
  error.style.display = "none";
};

// const weekWeather = async function () {
//   const response = await fetch(api_URL2 + `&appid=${apiKey2}`);
//   let data = await response.json();
//   console.log(weekWeather);
// };
// weekWeather();

searchIcon.addEventListener("click", () => {
  fetchWeather(searchInput.value);
});
