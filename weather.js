const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the actual OpenWeatherMap API key
const API_KEY = 'df9b1b115c016c4c03ef3a85884934e4'; // Or '7e447d2c57c706c0a8094269cf30ae1d'

// Weather API endpoint
app.get('/api/getweather', async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });

    const data = response.data;
    res.json({
      city: data.name,
      temperature: data.main.temp,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      windSpeed: data.wind.speed
    });
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

// Root route handler (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Weather App!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
