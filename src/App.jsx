import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherInfo from "./components/WeatherInfo";

export default function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  return (
    <div className="app-container">
      <h1 className="header">WeatherNow</h1>
      <SearchBox query={query} setQuery={setQuery} setData={setData} />
      <hr />
      {Object.keys(data).length > 0 ? (
        <WeatherInfo data={data} />
      ) : (
        <p className="message">Nothing to show.</p>
      )}
    </div>
  );
}
