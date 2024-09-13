// script.js
const apiKey = 'your-api-key'; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('searchBtn');
const locationInput = document.getElementById('locationInput');
const locationName = document.getElementById('locationName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const weatherIcon = document.getElementById('weatherIcon');

searchBtn.addEventListener('click', () => {
    const location = locationInput.value;
    fetchWeather(location);
});

function fetchWeather(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeather(data) {
    const { name, main, weather } = data;
    locationName.textContent = name;
    temperature.textContent = `Temperature: ${main.temp}°C`;
    weatherDescription.textContent = weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
}
