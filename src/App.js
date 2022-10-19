import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App shadow-large pb-20">
      <header className="bg-secondary-light">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-secondary-dark leading-0 font-sf-pro-text-8 text-10 tracking-10">
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
      <div className="flex flex-col">
        <h1>None of these are prose</h1>
        <h1 className="h1 h1-italic">H1 italic</h1>
        <h1 className="h1 h1-bold">H1 bold</h1>
        <span className="body1">Body1</span>
        <span className="body2">Body2</span>
        <span className="subtitle1">Subtitle1</span>
        <span className="subtitle2">Subtitle2</span>
        <span className="subtitle2 subtitle2-semiBold">Subtitle2 SemiBold</span>
        <span className="caption">Caption</span>
        <span className="overline">Overline</span>
        <button className="button">Button</button>
      </div>
    </div>
  );
}

export default App;
