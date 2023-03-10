import axios from "axios"
const API_KEY="944a2082c196494ff4d1be5d01008c3f"
const URL="https://api.openweathermap.org/data/2.5/weather"
export const fetchWeather=async (query)=>{
    let {data}=await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:API_KEY
        }
    })
    return data;
}
// export default fetchWeather;