import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <p>
            <a href="https://github.com/kasianiemiec/react-app-yes">
              Open-source code
            </a>{" "}
            by Kasia Niemiec.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
