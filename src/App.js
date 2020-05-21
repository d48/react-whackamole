import React, { useState, useEffect } from "react";
import "./styles.css";
import { buildSquares } from "./components/Square";
import { moveMole } from "./mole.js";

export default function App() {
  let [score, setScore] = useState(0)
  let [squares, setSquares] = useState(buildSquares(9))
  
  useEffect(() => {
    moveMole();
  });
 
  return (
    <div className="App">
      <header>
        <h1>React - Whack a Mole Game</h1>
        <h2>Score: {score}</h2>
      </header>
      
      <ul id="squares">
        {squares}
      </ul>
    </div>
  );
}
