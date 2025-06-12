export default function WeatherInfo({ data }) {
  return (
    <div className="weather-info">
      <div className="weather-main">
        <div className="weather-main-left">
          <p className="weather-location">
            {data.name}, {data.sys.country}
          </p>
          <p className="weather-temp">{data.main.temp}℃</p>
          <div className="weather-range">
            <p className="weather-low">L {data.main.temp_min}℃</p>
            <p className="weather-high">H {data.main.temp_max}℃</p>
          </div>
        </div>

        <div className="weather-main-right">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
      </div>

      <hr />
      <div className="weather-details">
        <div className="weather-card">
          <p className="weather-card-label">Feels like</p>{" "}
          <p className="weather-card-value">{data.main.feels_like}℃</p>
        </div>
        <div className="weather-card">
          <p className="weather-card-label">Humidity</p>{" "}
          <p className="weather-card-value">{data.main.humidity}</p>
        </div>
        <div className="weather-card">
          <p className="weather-card-label">Wind speed</p>{" "}
          <p className="weather-card-value">{data.wind.speed}</p>
        </div>
        <div className="weather-card">
          <p className="weather-card-label">Pressure</p>{" "}
          <p className="weather-card-value">{data.main.pressure}</p>
        </div>
      </div>
    </div>
  );
}
