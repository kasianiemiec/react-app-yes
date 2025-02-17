import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <p>
          <a href="https://github.com/kasianiemiec/react-app-yes">
            Open-source code
          </a>{" "}
          by Kasia Niemiec.
        </p>
      </div>
    </div>
  );
}

export default App;
