import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";

const ROOT = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  ROOT
);
