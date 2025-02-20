import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
              </div>

              <div>
                <span className="temperature">{props.data.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="pt-3">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}
