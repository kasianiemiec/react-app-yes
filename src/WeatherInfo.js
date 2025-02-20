import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <div className="d-flex align-items-center">
              <img
                src={props.data.iconUrl}
                alt="partly cloudy"
                className="float-left"
              />
              <div>
                <span className="temperature">{props.data.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}
