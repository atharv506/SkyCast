import { useState } from "react";    
import WeatherCard from "../components/WeatherCard";
import { getWeatherData } from "../services/api";
import "../css/home.css";
function Home(){
    const[searchQuery, setSearchQuery] = useState("");
    const[weatherData,setWeatherData] = useState(null);
    
    const handleSearch = async (e) => {
        e.preventDefault();
        if(searchQuery.trim() === "") return;
        const data = await getWeatherData(searchQuery);
        setWeatherData(data);
    }
    
    return (
        <div className="home"> 
        
        <form className="home__form" onSubmit={handleSearch}>
            
            <input type="text" className="home__input" placeholder="Enter city name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="home__button">Get Weather</button>

        </form>
        
        {weatherData && <WeatherCard weatherData={weatherData} />}
         </div>);
}
export default Home;