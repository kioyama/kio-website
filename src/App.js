import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import Splash from "./Splash";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute" }}>
        <header>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/ekd2slo.css"
          ></link>
        </header>
        <Dashboard />
      </div>
      <div className="blush-blush-wrapper"></div>
      <img className="blush-blush" src="blush.png" alt="blush logo" />
      <Splash />
    </div>
  );
}

export default App;
