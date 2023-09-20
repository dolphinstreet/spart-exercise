/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import './Card.css'



const Card = ({ city, onClick, isActive }) => {

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${import.meta.env.VITE_REACT_APP_OPEN_WEATHER_API_KEY}`

  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleClick = () => {
    if (onClick) {
      onClick(city); // Pass to the parent 
    }

  }
  const cardClassName = isActive ? 'active' : ""

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

    <li onClick={handleClick} className={cardClassName}>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
      <div className="center-info">
        <h1>{weather.name}</h1>
        <h3>Humidity {Math.round(weather.main.humidity)}%</h3>
      </div>
      <h2>{Math.round(weather.main.temp)}°</h2>
    </li>

  );

}

export default Card;
