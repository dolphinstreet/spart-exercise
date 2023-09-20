/* eslint-disable react/prop-types */
import "./CityData.css"


const CityData = ({ iconPath, title, value }) => {

  return (
    <div className="grid-item">
      <div className="top-section">
        <img src={iconPath} className="icon" />
        <div className="title">{title}</div>
      </div>
      <p className="value">{value}°</p>
    </div>
  )
}


export default CityData;

