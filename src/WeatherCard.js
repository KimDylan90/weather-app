import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ city, description, temperature, humidity }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" component="div">
          Temperature: {temperature} °C
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Humidity: {humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
