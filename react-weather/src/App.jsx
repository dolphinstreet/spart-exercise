import './App.css';
import { useState, useEffect } from 'react';
import Card from './Card/Card';
import CityInfo from './CityInfo/CityInfo';
//import Week from './Week/Week';



function App() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  let isActive = false;

  //if no card is clicked, the first input is shown
  useEffect(() => {
    if (cities) {
      setSelectedCity(cities[0]);
    }
  }, [cities]);

  const handleSearch = (e) => {
    e.preventDefault();
    let citiesInput = (e.target.cities.value).toLowerCase().split(/,\s*/) // to separate the input on every commas and every commas+space
    let uniqueCities = citiesInput.filter((city, index) => {
      return citiesInput.indexOf(city) === index; // to find duplicates
    })
    setCities(uniqueCities)
  }

  const handleCityClick = (city) => {
    setSelectedCity(city); // Updates selectedCity with the new city
  }


  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="left-wrapper">
          <form onSubmit={handleSearch} className='search-wrapper' >
            <input type="text" name="cities" className='searchbar' placeholder='Paris, Rome, Berlin' autoComplete="off" />
            <input type="submit" value="" className='submit-btn' />
          </form>
          <div className="city-wrapper">
            <CityInfo city={selectedCity} />
            <div className="week-forecast">
              {/* TIMES GOES BY TOO FAST AND I DID NOT FINISHED IT */}
              {/* {selectedCity &&
                <Week city={selectedCity} />
              } */}
            </div>
          </div>
        </div>

        <div className='right-wrapper'>
          <ul>
            {cities.map((city, index) => {
              isActive = (city === selectedCity);
              return (
                <Card
                  key={index}
                  city={city}
                  onClick={() => handleCityClick(city)}
                  isActive={isActive}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div >
  );
}

export default App;
