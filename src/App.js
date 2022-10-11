import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App shadow-large">
      <header className="bg-primary-light">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-bold text-secondary-dark leading-0 font-sf-pro-text-8 text-16 tracking-13">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
