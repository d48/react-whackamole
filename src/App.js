import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { buildSquares } from "./components/Square";
import { moveMole } from "./mole.js";

let timerId;
let squareEls;

function startGame(startHandler) {
  startHandler(true);
  timerId = setInterval(() => {
    moveMole(squareEls.current.children);
  }, 2500);
}

function stopGame(startHandler) {
  clearTimeout(timerId);
  startHandler(false);
}

export default function App() {
  let [score, setScore] = useState(0);
  let [squares, setSquares] = useState(buildSquares(9));
  let [gameStart, setGameStart] = useState(false);
  let [timer, setTimer] = useState(60);
  squareEls = useRef();

  return (
    <div className="App">
      <header>
        <h1>Whack-a-Mole Game</h1>
        <h2>Score: {score}</h2>

        {gameStart ? (
          <>
            <h3>Timer: {timer}</h3>
            <button onClick={() => stopGame(setGameStart)}>Stop Game</button>
          </>
        ) : (
          <h2>
            <button onClick={() => startGame(setGameStart)}>Start Game</button>
          </h2>
        )}
      </header>

      <ul id="squares" ref={squareEls}>
        {squares}
      </ul>
    </div>
  );
}
