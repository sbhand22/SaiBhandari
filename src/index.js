import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "aos/dist/aos.css";
import ScrollButton from "react-scroll-button";
import App from "./App";
import "./index.css";

function Root() {
  return (
    <BrowserRouter>
      <App />
      <ScrollButton
        behavior={"smooth"}
        buttonBackgroundColor={"rgba(15, 192, 226, 0.5)"}
        style={{ fontSize: "14px" }}
        data-aos="fade-left"
        iconType={"arrow-up"}
        targetId={"root"}
      />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
