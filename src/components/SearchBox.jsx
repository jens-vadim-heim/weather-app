export default function SearchBox({ query, setQuery, setData }) {
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    try {
      const res = await fetch(
        `/api/weather?location=${encodeURIComponent(query)}`
      );
      const json = await res.json();
      if (json.cod !== 200) {
        alert(`The search "${query}" gave no results.`);
        return;
      }
      console.log(json);
      setData(json);
      setQuery("");
    } catch (error) {
      console.error("Error occured: " + error);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter a city..."
        value={query}
        onChange={(e) => {
          console.log(e.target.value);
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleSearch(e);
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
