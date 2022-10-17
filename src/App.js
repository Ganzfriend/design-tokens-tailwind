import React from "react";
import logo from "./logo.svg";
import { Typography, Box } from "@mui/material";

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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h1-regular" color="text.secondary">
          H1 regular
        </Typography>
        <Typography variant="h1-italic">H1 italic</Typography>
        <Typography variant="h1-bold">H1 bold</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6-regular">H6 regular</Typography>
        <Typography variant="h6-italic">H6 italic</Typography>
        <Typography variant="h6-bold">H6 bold</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle1-regular">Subtitle 1 Regular</Typography>
        <Typography variant="subtitle1-semiBold">
          Subtitle 1 SemiBold
        </Typography>
        <Typography variant="subtitle2-medium">Subtitle 2 Medium</Typography>
        <Typography variant="subtitle2-semiBold">
          Subtitle 2 SemiBold
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="caption">Caption</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="button">Button</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="overline">Overline</Typography>
      </Box>
    </div>
  );
}

export default App;
