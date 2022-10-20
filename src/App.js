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
      <div className="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1>None of these are prose</h1>
        <h1 className="h1 text-primary-main">H1 regular</h1>
        <h1 className="h1 h1-italic italic text-secondary-light">H1 italic</h1>
        <h1 className="h1 h1-bold text-type-black-primary">H1 bold</h1>
        <h3 className="h3 text-grey-main">H3 regular</h3>
        <h3 className="h3 h3-italic italic">H3 italic</h3>
        <h3 className="h3 h3-bold">H3 bold</h3>
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
