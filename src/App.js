import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { buildSquares } from "./components/Square";
import { moveMole } from "./mole.js";

export default function App() {
  let [score, setScore] = useState(0)
  let [squares, setSquares] = useState(buildSquares(9))
  const squareEls = useRef();
  
  useEffect(() => {    
    console.log(squareEls.current.children)
    moveMole(squareEls.current.children);
  });
 
  return (
    <div className="App">
      <header>
        <h1>Whack-a-Mole Game</h1>
        { score ? <h2>Score: {score}</h2> : <h2><button>Start Game</button></h2> }
      </header>
      
      <ul id="squares" ref={squareEls}>
        {squares}
      </ul>
    </div>
  );
}
