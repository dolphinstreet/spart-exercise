/* eslint-disable react/prop-types */

const Day = ({ city, day }) => {

  return (
    <li>
      <small>{day}</small>
      <img src={`https://openweathermap.org/img/wn/@2x.png`} />
      <h2>{Math.round()}°</h2>

    </li>
  )
}


export default Day;

