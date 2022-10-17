import React from "react";
import logo from "./logo.svg";
import { Typography } from "@mui/material";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
        <Typography variant="h1" color="text.secondary">
          H1 regular
        </Typography>
        <Typography variant="h1">H1 italic</Typography>
        <h1>H1 bold</h1>
      </div>
      <h1>Non-prose H1</h1>
    </div>
  );
}

export default App;
