import * as React from 'react';
import { useWeather } from './context/WeatherContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//needs other api.open-meteo.com
export default function BasicWeek() {
    const {daily,weatherData}  = useWeather();
    //console.log(data.daily?.time);
    //console.log(weatherData.daily.time)
    let week = [1,2,3,4,5,6,7];
  return (
    <div style={{display:"flex"}}>
        {/* <code>{JSON.stringify(daily)}</code>
        <br/> */}
        {
            daily.time.map((item,i)=>
            <Card sx={{ minWidth: "10rem" }}>
                <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    <input className='input' disabled value={item} type="date" />
                    {weatherData.timezone}
                </Typography>
                <Typography variant="h5" component="div">
                    Az Bulutlu 
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    25°C/32°C
                </Typography>
                <Typography variant="body2">
                    etc. could weekly weather icons ?
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            )
        }
        
    </div>
  );
}
