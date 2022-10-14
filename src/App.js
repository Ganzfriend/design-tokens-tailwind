import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App shadow-large pb-20">
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
      <div className="prose">
        <h1>H1 regular</h1>
        <h1 className="font-italicized h1-italic">H1 italic</h1>
        <h1 className="font-bolded h1-bold">H1 bold</h1>
      </div>
      <h1 className="bold-h1 h1-bold">Non-prose H1</h1>
    </div>
  );
}

export default App;
