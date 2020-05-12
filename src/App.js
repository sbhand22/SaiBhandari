/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import React, { Component } from "react";
import "./App.css";
import Home from "./containers/Home/Home";

function App({ isDark, setIsDark }) {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 50px 0;
        background-color: ${theme.background};
        color: ${theme.text};
        height: 100%;
        transition-duration: 0.2s;
        transition-property: background-color, color;
      `}
    >
      <button
        style={{ display: "block", margin: "auto" }}
        css={css`
          margin-top: 30px;
          border: 2px solid ${theme.buttonBorder};
          background-color: ${theme.buttonBg};
          color: ${theme.buttonText};
          padding: 14px 28px;
          font-size: 16px;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          cursor: pointer;

          :hover {
            background-color: ${theme.buttonBgHover};
            color: ${theme.buttonTextHover};
          }
        `}
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? "Light" : "Dark"} mode
      </button>
      <Home />
    </div>
  );
}

export default App;
