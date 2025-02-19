import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: "Wednesday 7:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {" "}
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type city..."
                className="search-input w-100"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <br />
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-4">
          <div className="col-6">
            <div className="clearfix">
              <div className="d-flex align-items-center">
                <img
                  src={weatherData.iconUrl}
                  alt="partly cloudy"
                  className="float-left"
                />
                <div>
                  <span className="temperature">{weatherData.temperature}</span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <br />
      </div>
    );
  } else {
    let apiKey = "fe1483f743b581b5520a1b725af03a49";
    let units = "metric";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
