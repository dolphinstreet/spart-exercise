/* eslint-disable react/prop-types */
import "./Week.css"
import Day from "../Day/Day";
import { useEffect, useState } from "react"


// COULD NOT FINISH THIS BECAUSE OF TIME PASSING TOO FAST

const Week = ({ city }) => {

  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  const [error, setError] = useState(null)
  const [weather, setWeather] = useState(null)


  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_REACT_APP_OPEN_WEATHER_API_KEY}`
  const geocodeApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_REACT_APP_OPEN_WEATHER_API_KEY}`

  useEffect(() => {
    fetch(geocodeApiUrl)
      .then((rawResponse) => {
        if (!rawResponse.ok) { // if city is not found or other tyoes of statuses
          throw new Error("I can't find this city !");
        }
        return rawResponse.json()
      })
      .then((response) => {
        setLat(response[0].lat)
        setLon(response[0].lon)
      })
      .catch((e) => {
        setError("This city does not exist")
        console.error(e)
      })

  }, [geocodeApiUrl])

  useEffect(() => {
    if (lat && lon) {
      fetch(apiUrl)
        .then((rawResponse) => {
          if (!rawResponse.ok) {
            throw new Error("I can't fetch weather");
          }
          return rawResponse.json();
        })
        .then((response) => {
          setWeather(response.list.slice(0, 6));
        })
        .catch((e) => {
          setError("I can't fetch weather");
          console.error(e);
        });
    }
  }, [lat, lon, apiUrl]);

  return (
    <>
      <ul>
        {weather.list &&
          weather.list.map((day, index) => {
            return (
              <Day
                key={index}
                temp={day.main.temp}
                day={day}
              />
            )
          })}

      </ul>
    </>
  )
}


export default Week;
