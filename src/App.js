import React from "react";
import logo from "./logo.svg";
import { Typography, Box, Button } from "@mui/material";

import "./App.css";

function App() {
  return (
    <Box className="App" sx={{ pb: 20 }}>
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
      <Button>Button</Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "primary.main",
        }}
      >
        <Typography variant="h1-regular" color="text.secondary">
          H1 regular
        </Typography>
        <Typography variant="h1-italic">H1 italic</Typography>
        <Typography variant="h1-bold">H1 bold</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "secondary.light",
        }}
      >
        <Typography variant="h6-regular">H6 regular</Typography>
        <Typography variant="h6-italic">H6 italic</Typography>
        <Typography variant="h6-bold">H6 bold</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "grey.main",
        }}
      >
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "button.selected",
        }}
      >
        <Typography variant="subtitle1-regular">Subtitle 1 Regular</Typography>
        <Typography variant="subtitle1-semiBold">
          Subtitle 1 SemiBold
        </Typography>
        <Typography variant="subtitle2-medium">Subtitle 2 Medium</Typography>
        <Typography variant="subtitle2-semiBold">
          Subtitle 2 SemiBold
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "warning.main",
        }}
      >
        <Typography variant="caption">Caption</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "success.light",
        }}
      >
        <Typography variant="button">Button</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.black.primary",
          color: "type.white.tertiary",
        }}
      >
        <Typography variant="overline">Overline</Typography>
      </Box>
    </Box>
  );
}

export default App;
