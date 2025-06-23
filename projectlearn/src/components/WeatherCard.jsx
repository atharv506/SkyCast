import "../css/weathercard.css";

function getWeatherEmoji(condition) {
  if (!condition) return "❓";
  const cond = condition.toLowerCase();

  // Array of [keyword, emoji] pairs for easy extension
  const emojiMap = [
    [["sunny"], "☀️"],
    [["clear"], "🌤️"],
    [["partly cloudy", "partly sunny"], "⛅"],
    [["cloud", "overcast"], "☁️"],
    [["rain", "drizzle", "shower"], "🌧️"],
    [["thunder", "storm", "lightning"], "⛈️"],
    [["snow", "blizzard"], "❄️"],
    [["sleet"], "🌨️"],
    [["hail"], "🌨️"],
    [["fog", "mist", "haze", "smoke"], "🌫️"],
    [["wind", "breeze", "gust"], "💨"],
    [["tornado", "cyclone", "hurricane"], "🌪️"],
    [["hot"], "🔥"],
    [["cold", "freezing", "frost"], "🧊"],
    [["ice", "icy"], "🧊"],
    [["dust", "sand"], "🌪️"],
  ];

  for (const [keywords, emoji] of emojiMap) {
    if (keywords.some(keyword => cond.includes(keyword))) {
      return emoji;
    }
  }

  return "🌡️"; 
}

function WeatherCard({ weatherData }){
    return (
        <div className="weather-card">
            <h2 className="weather-card__title">Weather Information</h2>
            <div className="weather-card__content">
                <p className="weather-card__location">📍{weatherData.location}</p>    
                <p className="weather-card_time">📅{weatherData.time}</p>
                <p className="weather-card__temperature">🌡️{weatherData.temperature}°C</p>
                <p className="weather-card__condition">{getWeatherEmoji(weatherData.condition)}{weatherData.condition}</p>
                <p className="weather-card__humidity">💧Humidity: {weatherData.humidity}%</p>
                <p className="weather-card__wind">🌬️Wind Speed: {weatherData.windSpeed} km/h</p>

            </div>  
        </div>
    );
}

export default WeatherCard; 