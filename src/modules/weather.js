

const key = "89efdcf816b74db59b302555232408" // api key 


// get weather data from api
export async function getWeather(location) {
    try {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no`
    );

    if (!response.ok) {
        throw new Error('Weather API request failed!');
    }

    const data = await response.json();

    return data;
    
    } catch (error) {
        console.log(error);
        throw error; // rethrow to propagate the error to the outer catch block
    }
}

