import { React, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8af0758160959c5062481e96757d32f0
  `

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder= "Enter Location"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Vancouver</p>
          </div>
          <div className="temp">
          <h1>23°C</h1>
          </div>
          <div className="desc">
            <p>Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">25°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">10 KPM</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
