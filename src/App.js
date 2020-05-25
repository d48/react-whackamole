import React, { useState, useRef } from "react";
import "./styles.css";
import { buildSquares } from "./components/Square";
import { moveMole, removeMoles } from "./mole.js";

let moleIntervalId;
let timerId;
let squareEls;
let timerDuration = 10;
let moleSpeed = 500;


function startGame(startHandler, timeHandler) {
  startHandler(true);
  timeHandler(timerDuration);
  
  moveMole(squareEls.current.children);
  moleIntervalId = setInterval(() => {
    moveMole(squareEls.current.children);
  }, moleSpeed);

  timerId = setInterval(() => {
    timeHandler(time => {
      if (time > 0) {
        return time - 1;
      }

      if (time === 0) {
        stopGame(startHandler, timeHandler);
      }
    });
  }, 1000);
}

function stopGame(startHandler, timeHandler) {
  clearTimeout(moleIntervalId);
  clearTimeout(timerId);
  startHandler(false);
  removeMoles(squareEls.current.children)
  timeHandler(timerDuration)
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
        <h2>Score: {score} {gameStart ? ( <span>/ Timer: {timer} sec</span>) : null}</h2>
        {gameStart ? (
          <>          
            <button onClick={() => stopGame(setGameStart, setTimer)}>
              Stop Game
            </button>
          </>
        ) : (      
            <button onClick={() => startGame(setGameStart, setTimer)}>
              Start Game
            </button>
        )}
      </header>

      <ul id="squares" ref={squareEls}>
        {squares}
      </ul>
    </div>
  );
}
