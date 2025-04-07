import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // state that holds the selected city
  const [city, setCity] = useState("");

  // state that holds the weather data
  const [weather, setWeather] = useState(null);

  // state that holds the body element background value
  const [bg, setBg] = useState("");

  // hook that updates the document body backround when 'bg' state changes
  useEffect(() => {
    document.body.style.backgroundImage = bg
      ? bg
      : getBackgroundGradient("default");
  }, [bg]);

  // hook that runs when the 'city' state changes.
  // fetches weather data from API, processes the response and updates 'weather' state
  // does nothing if the city is an empty string
  useEffect(() => {
    if (!city) return;

    // function that destructures the data object and updates 'weather' and 'bg' states with relevant values
    const processData = ({
      name,
      main: { temp, feels_like, humidity },
      weather: [{ main, description, icon }],
      sys: { country },
    }) => {
      setWeather({
        city: name,
        country: country,
        icon: icon,
        temp: temp,
        feels_like: feels_like,
        hum: humidity,
        weather: main,
        desc: description,
      });
      setBg(getBackgroundGradient(main));
    };

    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
          setWeather(null);
        } else {
          processData(data);
          console.log(data);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchWeather();
  }, [city]);

  // handles form (input field) submission and updates 'city' state
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.elements.input.value);
    e.target.elements.input.value = "";
  };

  // function that maps weather conditions to background image values for use by body element
  const getBackgroundGradient = (weatherCondition) => {
    switch (weatherCondition.toLowerCase()) {
      case "clear":
        return "radial-gradient(at center top, #FFFFDD, #0185FF)";
      case "clouds":
        return "radial-gradient(at center top, #C2EAFF, #979797)";
      case "drizzle":
        return "linear-gradient(rgb(195, 220, 255), rgb(50, 107, 199))";
      case "rain":
        return "linear-gradient(rgb(56, 56, 56), rgb(118, 170, 255))";
      case "snow":
        return "linear-gradient(rgb(255, 255, 255), rgb(123, 174, 255))";
      case "thunderstorm":
        return "radial-gradient(at center top, #FFFD01, #12015E)";
      default:
        return "linear-gradient(to right, #f6d365, #fda085)";
    }
  };

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1>Weather app</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            id="input"
            placeholder="Type a location..."
          />
          <button>Go</button>
        </form>
        <div className="info-container">
          {weather ? (
            <div className="weather-info">
              <h2>
                {weather.city}, {weather.country}
              </h2>
              <img src={getWeatherIconUrl(weather.icon)} alt="icon" />
              <p>
                <strong>Weather:</strong> {weather.weather}
              </p>
              <p>
                <strong>Details:</strong> {weather.desc}
              </p>
              <p>
                <strong>Temperature:</strong> {weather.temp}°C
              </p>
              <p>
                <strong>Feels like:</strong> {weather.feels_like}°C
              </p>
              <p>
                <strong>Humidity:</strong> {weather.hum}%
              </p>
            </div>
          ) : (
            <p>No location selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
