# Weather App ☀️🌧️

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)

[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge)](https://weather-app-eight-beta-88.vercel.app)

A simple weather application built with React, styled with CSS, and powered by Vite. Users can search for current weather conditions by city name. The app fetches data securely through a backend API route to keep the API key hidden.

## Stack

- HTML  
- CSS  
- JavaScript (React)  
- Vite
- OpenWeather API

## Features

- Search weather by city name  
- Display current temperature, weather conditions, humidity, and wind speed  
- Secure API key handling via backend API route (`/api/weather`)  
- Basic error handling for invalid searches  
- Responsive and user-friendly interface  

## How it works

- User enters a city name in the search box  
- On search, the frontend calls the backend API route `/api/weather?location=city`  
- The backend fetches weather data from OpenWeather API using a hidden API key  
- Weather data is returned and displayed to the user  

## Future plans

- Add **unit toggle** (Celsius / Fahrenheit)  
- Include **location auto-detection** via browser geolocation  
- Improve UI with **dark mode/light mode** toggle  
