// serverles function that acts as backend
export default async function handler(req, res) {
  // extract search term form url
  const { location } = req.query;
  const apiKey = process.env.VITE_API_KEY;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Api fetch error: " + error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}
