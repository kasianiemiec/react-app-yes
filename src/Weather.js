import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {" "}
      <form>
        <input type="search" placeholder="Type city..." />
        <input type="submit" value="Search" className="btn btn-warning" />
      </form>
      <br />
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Party cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="partly cloudy"
          />
          15°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 60%</li>
            <li>Wind: 5km/h</li>
            <li>Precipitation: 15%</li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}
