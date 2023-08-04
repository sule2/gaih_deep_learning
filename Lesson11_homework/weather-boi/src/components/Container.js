import { useWeather } from "./context/WeatherContext"

function Container() {
    const {weatherData} = useWeather();
//console.log(daily)
    //let week = daily.time;
    //let tempWeek = daily.apparent_temperature_max;

    /* const showWeek = daily.apperent_temperature_max.map((dayData,i)=>
        <div>
            <div>
                Min/Max °C : {daily.apparent_temperature_min[i]} / {daily.apparent_temperature_max[i]}
            </div>
        </div>

    ) */
    

  return (
    <div className="App">
        <h1>weather</h1>
        
        <code>
            {/* {JSON.stringify(weatherData)} */}
        </code>
        <hr/>
        <div>
            <h3></h3>{JSON.stringify(weatherData) }
            <hr/>{/* 0176 -> ° */}
            {/* <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto auto auto"}}>
                {daily.time.map((item,i)=>
                    <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
                        <div>
                            Min/Max °C : {daily.apparent_temperature_min[i]} / {daily.apparent_temperature_max[i]}
                        </div>
                        <div>
                            Sunrise/Sunset : {daily.sunrise[i]} / {daily.sunset[i]}
                        </div>
                        <div>
                            Wind Speed: {daily.windspeed_10m_max[i]}
                        </div>

                    </div>
                    )}
            </div> */}
        </div>
        {/* <section className="card">
            <div className="card-header">
                <h2 color="black">{weatherData.weatherData.name}</h2>{weatherData.weatherData.weather[0].description.toUpperCase()}
                <hr/>
                <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto"}}>
                <div>
                    Min: {weatherData.weatherData.main.temp_min}
                </div>
                <div>
                    Max: {weatherData.weatherData.main.temp_max}
                </div>
                <div>
                    Hissedilen: {weatherData.weatherData.main.feels_like}
                </div>
                <div>
                    Nem: {weatherData.weatherData.main.humidity}%
                </div>
                </div>
            </div>


        </section> */}
    </div>
  )
}

export default Container