const jsWeather = document.querySelector('.js-weather');
const weatherDesc = document.createElement('p');
const weatherText = document.createElement('p');
const weatherIMG = document.createElement('img');

const API_KEY = '20034b8e902c02caf67c674cec7c3051';
const COORDS = 'coords';

function createWeather() {
    jsWeather.appendChild(weatherText);
    jsWeather.appendChild(weatherIMG);
    jsWeather.appendChild(weatherDesc);
}

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const icon = json.weather[0].icon;
        const description = json.weather[0].description;
        weatherIMG.src = `https://openweathermap.org/img/wn/${icon}.png`;
        weatherText.textContent = `${temperature}℃`;
        weatherDesc.textContent = `${description}`;
        createWeather();
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.error("Cannot access to geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}

function init() {
    loadCoords();
}

init();