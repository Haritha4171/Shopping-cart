import { useState } from "react"
import {fetchWeather} from "./fetchWeather"

function App(){
    const[query,setQuery]=useState("")
    const[weather,setWeather]=useState({})
    const handleChange=(e)=>{
        setQuery(e.target.value)
    }
    const search=async(e)=>{
        if(e.code === "Enter"){
            let data=await fetchWeather(query)
            setWeather(data)
            setQuery("")
        }
    }
return(
    <div>
        <input type="text" placeholder="please enter ur city......" value={query} onChange={handleChange} onKeyPress={search}></input>
        {weather.main &&
        <div id="city">
            {weather.name}
            <span>{weather.sys.country}</span>
        <div id="temp">
            {Math.round(weather.main.temp)}
       <span>&deg;C</span>
       </div>
       <div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}alt={weather.weather[0].description}/>
            <p>{weather.weather[0].description}</p>
        </div>
    </div>
   }   
   </div>
)
}

export default App;
