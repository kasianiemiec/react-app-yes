import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {" "}
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type city..."
              className="w-100"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-warning w-100"
            />
          </div>
        </div>
      </form>
      <br />
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Party cloudy</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <div className="d-flex align-items-center">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="partly cloudy"
                className="float-left"
              />
              <div>
                <span className="temperature">15</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
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
