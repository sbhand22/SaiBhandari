import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import DarkModeToggle from "./containers/Home//DarkMode/DarkModeToggle";

function Root() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <DarkModeToggle />
      </div>
      <App />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
