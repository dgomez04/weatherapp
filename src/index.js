
import { getWeather } from './modules/weather.js';

getWeather('London').then(data => console.log(data));
