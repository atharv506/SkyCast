const API_KEY = "03dcd7ba984f461183b100514252306";
const BASE_URL = "http://api.weatherapi.com/v1";





const getWeatherData = async (city) => {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    const data = await response.json();
    
    return{
        location: `${data.location.name} ${data.location.country}`,
        time: data.current.last_updated,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph
        
    }
}

export { getWeatherData };





