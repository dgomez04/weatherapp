
import { getWeather } from './modules/weather.js';

// eventListener for location button to get weather data
document.getElementById('location-btn').addEventListener('click',  () => {
    const location = document.getElementById('location-input').value;
    getWeather(location).then(data => console.log(data));
});





