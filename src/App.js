import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { buildSquares } from "./components/Square";
import { moveMole } from "./mole.js";

let moleIntervalId;
let timerId;
let squareEls;
let timerDuration = 10;

function startGame(startHandler, timeHandler) {
  startHandler(true);
  timeHandler(timerDuration);
  moleIntervalId = setInterval(() => {
    moveMole(squareEls.current.children);
  }, 2500);

  timerId = setInterval(() => {
    timeHandler(time => {
      if (time > 0) {
        return time - 1;
      }

      if (time === 0) {
        stopGame(startHandler);
      }
    });
  }, 1000);
}

function stopGame(startHandler) {
  clearTimeout(moleIntervalId);
  clearTimeout(timerId);
  startHandler(false);
}

export default function App() {
  let [score, setScore] = useState(0);
  let [squares, setSquares] = useState(buildSquares(9));
  let [gameStart, setGameStart] = useState(false);
  let [timer, setTimer] = useState(timerDuration);
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
            <button onClick={() => startGame(setGameStart, setTimer)}>
              Start Game
            </button>
          </h2>
        )}
      </header>

      <ul id="squares" ref={squareEls}>
        {squares}
      </ul>
    </div>
  );
}
