import { useWeather } from "./context/WeatherContext";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { margin } from "@mui/system";

function BasicDay() {
    const {weatherData,daily,weatherIcon}  = useWeather();
    let dt = 1691071474;
    console.log(new Date(dt*1000) + "- dt -" + dt);
    console.log(daily)
    
    /* if(typeof(lat) !== 'undefined'){
      console.log((new Date(weatherData?.dt*1000)).toISOString())
    } */
    //weatherData? console.log(new Date(weatherData?.dt*1000)) : console.log(Date.now().toISOString()) 
    //console.log(weatherData? new Date(weatherData?.dt*1000).toISOString(): Date.now().toISOString())
  return (
    <div style={{display:"flex"}}>
        <code style={{width:"30rem"}}>{JSON.stringify(weatherData)}</code>
        <br/> <hr/><code style={{width:"30rem"}}>{JSON.stringify(daily)}</code><br/>
        <Card sx={{ minWidth: "30rem" }}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom  component="div" className="card-date"/* style={{display:"grid",gridTemplateColumns:"auto auto"}} */>
                  <div className="card-item">
                    {(new Date(weatherData?.dt*1000)).toLocaleDateString()} 
                  </div>
                    <div className="card-item">
                      {weatherData?.name}
                    </div>
                    
                </Typography>
                <Typography variant="h5" component="div">
                  <img src={`${process.env.REACT_APP_ICON_URL}/${daily?.icon}.png`} />
                  {/* {daily?.description?.toUpperCase()} {weatherData?.main?.temp} °C  */}
                </Typography>
                <Typography variant="h5" component="div">
                  {daily?.description?.toUpperCase()} {weatherData?.main?.temp} °C 
                </Typography>
                <Typography sx={{ mb: 1.5 }} style={{fontSize:"12"}} color="text.secondary">
                     Hissedilen {weatherData?.main?.feels_like} °C 
                </Typography>
                <Typography variant="body2">

                   {weatherData?.main?.temp_min} °C / {weatherData?.main?.temp_max} °C 
                </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
    </div>
  )
}

export default BasicDay