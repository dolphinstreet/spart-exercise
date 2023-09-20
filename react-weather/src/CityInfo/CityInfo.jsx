/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import "./CityInfo.css"
import CityData from "../CityData/CityData"

const CityInfo = ({ city }) => {

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${import.meta.env.VITE_REACT_APP_OPEN_WEATHER_API_KEY}`
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    if (!city) { // if user press submit without typing
      setError("Please enter a city");
      setLoading(false);
      setWeather(null)
      return;
    }
    fetch(apiUrl)
      .then((rawResponse) => {
        if (!rawResponse.ok) { // if city is not found or other tyoes of statuses
          throw new Error("I can't find this city !");
        }
        return rawResponse.json()
      })
      .then((response) => {
        setWeather(response)
      })
      .catch((e) => {
        setError("This city does not exist")
        console.error(e)
      })
      .finally(() => {
        setLoading(false); // loading goes false when fetching is colpleted
      });

  }, [apiUrl, city])

  if (loading) {
    return <div className="Loading">Winter is coming!</div>;
  }

  if (error) {
    setError(null); //reset
  }

  if (!weather) {
    return null; // if weather data is not available yet
  }

  return (
    <div className="city-data">
      <div className="main-info">
        <div className="location">
          <img src="/location-dot-solid.svg" />
          <h2>{weather.name}, {weather.sys.country}</h2>
        </div>
        <h1>{Math.round(weather.main.temp)}°</h1>
        <h3>{weather.weather[0].description}</h3>
      </div>
      <div className="secondary-info">

        <CityData iconPath={"/temperature-arrow-down-solid.svg"} title={"Min. temperature"} value={weather.main.temp_min} />
        <CityData iconPath={"/temperature-arrow-up-solid.svg"} title={"Max. temperature"} value={weather.main.temp_max} />
        <CityData iconPath={"/hourglass-regular.svg"} title={"Pressure"} value={weather.main.pressure} />
        <CityData iconPath={"/wind-solid.svg"} title={"Wind speed"} value={weather.wind.speed} />




      </div>
    </div>
  );

}

export default CityInfo;
