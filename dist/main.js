/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ \"./src/modules/weather.js\");\n\n\n\n// eventListener for location button to get weather data\ndocument.getElementById('location-btn').addEventListener('click',  () => {\n    const location = document.getElementById('location-input').value;\n    (0,_modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location).then(data => console.log(data));\n});\n\n\n\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n\n\nconst key = \"89efdcf816b74db59b302555232408\" // api key \n\n\nasync function getWeather(location) {\n    try {\n\n    // check if the location is already stored in cache\n    const cache = await caches.open('weather');\n    const cachedResponse = await cache.match(location);\n\n    // if the location is already stored in cache, return the data\n    if (cachedResponse) {\n        const data = await cachedResponse.json();\n        const cacheTimestamp = parseInt(cachedResponse.headers.get('cache-timestamp'));\n\n        // if the cache is older than five minutes, do a new call to the api\n        if(Date.now() - cacheTimestamp < 300000) { \n            console.log('returned from cache')\n            return data;\n        } else { \n            console.log('Cached data expired, fetching new data')\n            await cache.delete(location); // delete the old cache\n        }\n    }\n\n    const response = await fetch(\n        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=5&aqi=no&alerts=no`\n    );\n\n    if (!response.ok) {\n        throw new Error('Weather API request failed!');\n    }\n\n    const data = await response.json();\n\n    await cache.put(location, new Response(JSON.stringify(data), {\n        headers : { 'cache-timestamp' : Date.now() }\n    })); // store response in cache with a timestamp\n\n    return data;\n\n    } catch (error) {\n        console.log(error);\n        throw error; // rethrow to propagate the error to the outer catch block\n    }\n}\n\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;