import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App shadow-large">
      <header className="bg-secondary-light">
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
      <div>
        <h1 className="h1-regular text-h1-regular headline-h1-regular heading-headline-h1-regular text-h1-regular font-h1-regular text-headline-h1-regular font-headline-h1-regular">
          My test H1
        </h1>
      </div>
    </div>
  );
}

export default App;
