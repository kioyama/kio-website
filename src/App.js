import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import Splash from "./Splash";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", zIndex: -1 }}>
        <header>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/ekd2slo.css"
          ></link>
        </header>
        <div className="app">
          <Dashboard />
        </div>
      </div>
      <img className="blush-blush" src="blush.png" alt="blush logo" />
      <div style={{ position: "absolute", pointerEvents: "none" }}>
        <Splash />
      </div>
    </div>
  );
}

export default App;
