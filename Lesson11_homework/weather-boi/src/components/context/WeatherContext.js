import axios from 'axios';
import {useContext,createContext, useState, useEffect} from 'react';

const WeatherContext = createContext();

/* export */ const WeatherProvider = ({children})=>{

    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [weatherData, setWeatherData] = useState({}/* [] */);
    const [daily, setDaily] = useState({
      
      /* time:[],apparent_temperature_max:[],apparent_temperature_min:[],precipitation_hours:[],precipitation_probability_max:[],temperature_2m_max:[],temperature_2m_min:[],
      winddirection_10m_dominant:[],windspeed_10m_max:[] */
    });
    const [weatherIcon,setWeatherIcon] = useState();
    const [dailyTime,setDailyTime] = useState([]);
    const [error, setError] = useState(null);
    //const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
    //const REACT_APP_API_KEY = '40bdb50f3627034bcd66267f7ae2303b';
    const new_api_url_with_params = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=relativehumidity_2m,apparent_temperature,precipitation,windspeed_120m,is_day&daily=weathercode,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&timezone=auto`;
    
   
    
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude/* .toFixed(2) */);
      setLong(position.coords.longitude/* .toFixed(2) */);
    })
    console.log( "lat : " + lat + "typeof : " + typeof(lat))
    console.log(typeof(lat) !== 'undefined')
      if(typeof(lat) !== 'undefined'){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(2)}&lon=${long.toFixed(2)}&units=metric&lang=tr&appid=${process.env.REACT_APP_API_KEY}`)//`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_hours,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto&models=best_match`
      .then((res)=>{
        setWeatherData(res.data);
        setDaily(res.data.weather?res.data.weather.at(0):res.data.weather);
        /* axios.get(`${process.env.REACT_APP_ICON_URL}/${res.data.weather.at(0).icon}.png`)//`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_hours,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto&models=best_match`
        .then((res)=>{
          setWeatherIcon(res.data);
        }).catch((e)=>console.log("Icon error: " + e)) */
      })
      .catch((e)=>setError(e))
      }
      
    }, [lat,long])

    const getWeather=async (lat, long) =>{
      const res = await axios.get(
        /*  `${process.env.REACT_APP_API_URL}lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=tr` *///https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=relativehumidity_2m,apparent_temperature,precipitation,windspeed_120m,is_day&daily=weathercode,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&timezone=auto

        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_hours,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`
      );
      return handleResponse(res);
    }

    const mapDataToWeatherInterface=(data)=> {
      const mapped = {
        date: data.dt * 1000, // convert from seconds to milliseconds
        description: data.weather[0].main,
        temperature: Math.round(data.main.temp),
      };
    
      // Add extra properties for the five day forecast: dt_txt, icon, min, max
      if (data.dt_txt) {
        mapped.dt_txt = data.dt_txt;
      }
    
      return mapped;
    }

    const values = {
        //lat,setLat,
        //long,setLong,
        //data, setData
        lat,long,
        weatherData,
        daily,
        weatherIcon
        /* dailyTime , setDailyTime */
    };

    const handleResponse=(response)=>{
      if (response.ok) {
        return response;//.json();
      } else {console.log("Error ")
        //throw new Error("Please Enable your Location in your browser!");
      }
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

const useWeather = () =>useContext(WeatherContext);

export {useWeather, WeatherProvider};