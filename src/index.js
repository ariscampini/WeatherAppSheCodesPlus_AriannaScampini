// Feature 1

//Hour
let now = new Date();

function formatTime(time) {
  let hour = time.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hour}:${minutes}`;
}

let currentHour = document.querySelector("#current-hour");

currentHour.innerHTML = formatTime(now);

// Date

function formatDate(date) {
  let day = date.getDay();
  let currentMonth = now.getMonth();
  let today = date.getDate();
  let year = date.getFullYear();

  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return `${weekDay[day]}, ${month[currentMonth]} ${today}, ${year}`;
}

let currentDate = document.querySelector("#current-day");

currentDate.innerHTML = formatDate(now);

// Feature 2

function cityChange(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let locationInput = document.querySelector("#exact-location");
  if (searchInput.value) {
    locationInput.innerHTML = `${searchInput.value}`;
  } else {
    locationInput.innerHTML = `Please, enter a city`;
  }
}

let location = document.querySelector("#city-search-bar");
location.addEventListener("submit", cityChange);

// Bonus Feature

//Current Celcius

let currentTemperature = document.querySelector("#degrees");

currentTemperature.innerHTML = "3";

//Fahrenheit Function

function changeDegreesFahrenheit(event) {
  event.preventDefault();

  let changeDegreeF = document.querySelector("#degrees");
  let temperature = currentTemperature.innerHTML;
  changeDegreeF.innerHTML = (temperature * 9) / 5 + 32;
}

let fahrenheitDegrees = document.querySelector("#fahrenheit");
fahrenheitDegrees.addEventListener("click", changeDegreesFahrenheit);

// Celcius Function

function changeDegreesCelsius(event) {
  event.preventDefault();

  let changeDegreeC = document.querySelector("#degrees");
  changeDegreeC.innerHTML = `3`;
}

let celciusDegrees = document.querySelector("#celsius");
celciusDegrees.addEventListener("click", changeDegreesCelsius);
