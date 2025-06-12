export default function WeatherInfo({ data }) {
  return (
    <div className="weather-info">
      <div className="main-info">
        <div className="left">
          <p className="city">
            {data.name}, {data.sys.country}
          </p>
          <p className="temp">{data.main.temp}℃</p>
        </div>

        <div className="right">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
      </div>

      <div className="weather-cards">
        <div className="info-card">
          <p className="text">Feels like</p>{" "}
          <p className="data">{data.main.feels_like}℃</p>
        </div>
        <div className="info-card">
          <p className="text">Humidity</p>{" "}
          <p className="data">{data.main.humidity}</p>
        </div>
        <div className="info-card">
          <p className="text">Wind speed</p>{" "}
          <p className="data">{data.wind.speed}</p>
        </div>
        <div className="info-card">
          <p className="text">Pressure</p>{" "}
          <p className="data">{data.main.pressure}</p>
        </div>
      </div>
    </div>
  );
}
