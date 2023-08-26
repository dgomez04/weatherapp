

const key = "89efdcf816b74db59b302555232408" // api key 


// get weather data from api, store in cache, if the location is already stored, match it instead of doing the call
export async function getWeather(location) {
    try {

    // check if the location is already stored in cache
    const cache = await caches.open('weather');
    const cachedResponse = await cache.match(location);

    // if the location is already stored in cache, return the data
    if (cachedResponse) {
        const data = await cachedResponse.json();
        const cacheTimestamp = parseInt(cachedResponse.headers.get('cache-timestamp'));

        // if the cache is older than five minutes, do a new call to the api
        if(Date.now() = cacheTimestamp < 300000) { 
            console.log('returned from cache')
            return data;
        }
    }

    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=5&aqi=no&alerts=no`
    );

    if (!response.ok) {
        throw new Error('Weather API request failed!');
    }

    const data = await response.json();

    await cache.put(location, new Response(JSON.stringify(data), {
        headers : { 'cache-timestamp' : Date.now() }
    })); // store response in cache with a timestamp

    return data;

    } catch (error) {
        console.log(error);
        throw error; // rethrow to propagate the error to the outer catch block
    }
}

