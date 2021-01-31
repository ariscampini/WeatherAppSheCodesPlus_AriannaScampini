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

// Change City
function showTemperature(response) {
  console.log(response);
  document.querySelector("#exact-location").innerHTML = response.data.name;
  let temperatureNow = Math.round(response.data.main.temp);
  document.querySelector("#degrees").innerHTML = `${temperatureNow}°C`;

  let maxTemp = Math.round(response.data.main.temp_max);
  document.querySelector("#max-temp").innerHTML = `⬆${maxTemp}°C`;
  let minTemp = Math.round(response.data.main.temp_min);
  document.querySelector("#min-temp").innerHTML = `⬇${minTemp}°C`;
  let windSpeed = response.data.wind.speed;
  document.querySelector("#wind-speed").innerHTML = `${windSpeed}%`;
  let feels = Math.round(response.data.main.feels_like);
  document.querySelector("#feels").innerHTML = `${feels}°C`;
  let humidity = Math.round(response.data.main.humidity);
  document.querySelector("#humidity").innerHTML = `${humidity}%`;

  document.querySelector("#sky-status").innerHTML =
    response.data.weather[0].main;

 //Fahrenheit Function

function changeDegreesFahrenheit(event) {
  event.preventDefault();
 
  let changeDegreeF = document.querySelector("#degrees");
  let temperature = temperatureNow.innerHTML;
  let changeF= (temperatureNow * 9) / 5 + 32;
  changeDegreeF.innerHTML = `${changeF}°F`
}

let fahrenheitDegrees = document.querySelector("#fahrenheit");
fahrenheitDegrees.addEventListener("click", changeDegreesFahrenheit);

// Celcius Function

function changeDegreesCelsius(event) {
  event.preventDefault();

  let changeDegreeC = document.querySelector("#degrees");
  changeDegreeC.innerHTML = `${temperatureNow}°C`;
}

let celciusDegrees = document.querySelector("#celsius");
celciusDegrees.addEventListener("click", changeDegreesCelsius);

  //sky-status
  let iconElement = document.querySelector("#weather-icon");
  iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt",`response.data.weather[0].description`);
}

function search(city) {
  let apiKey = "f21a32773c5be9756a640ddc720ea283";
  let units = "metric";
  let url = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${url}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showTemperature);
 
}

function cityChange(event) {
  event.preventDefault();

  let city = document.querySelector("#search-input").value;
  search(city);
}

let locationNow = document.querySelector("#city-search-bar");
locationNow.addEventListener("submit", cityChange);

// Current Position

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

function showCurrentPosition(position) {
  let apiKey = "f21a32773c5be9756a640ddc720ea283";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}


let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentPosition);



//

search("Madrid");



