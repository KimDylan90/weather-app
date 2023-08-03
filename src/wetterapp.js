import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import WeatherCard from './WeatherCard';
import axios from 'axios';

const API_KEY = 'ce8f6bc8a1bca87ae1b45f9387a3652d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleAddCity = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });

      const newWeatherData = {
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
      };

      setWeatherData((prevData) => [...prevData, newWeatherData]);
      setCity('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={handleCityChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddCity}>
            Add City
          </Button>
        </Grid>
        {weatherData.map((data, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <WeatherCard {...data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WeatherApp;
