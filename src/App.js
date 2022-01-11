import logo from "./logo.svg";
import "./App.css";
import PanelNavigation from "./PanelNavigation";
import ItemDisplay from "./ItemDisplay";
import Dashboard from "./Dashboard";
import React, { useState } from "react";

function App() {
  const [rotation, setRotation] = useState(0);
  console.log(rotation);
  return (
    <div>
      <header>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ekd2slo.css"
        ></link>
      </header>
      <div className="app">
        <Dashboard onScrollPanel={(r) => setRotation(r)} />
      </div>
      <div className="blush-blush">
        <img
          src="blush.png"
          alt="blush logo"
          style={{ transform: `rotate(${rotation * 10}deg)` }}
        />
      </div>
    </div>
  );
}

export default App;
