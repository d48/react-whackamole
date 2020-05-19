import React, { useState} from "react";
import "./styles.css";

export default function App() {
  let [score, setScore] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>React - Whack a Mole Game</h1>
        <h2>Score: {score}</h2>
      </header>
      
      <ul id="squares">
        <li class="square" id="1"></li>
        <li class="square" id="2"></li>
        <li class="square" id="3"></li>
        <li class="square" id="4"></li>
        <li class="square" id="5"></li>
        <li class="square" id="6"></li>
        <li class="square" id="7"></li>
        <li class="square" id="8"></li>
        <li class="square" id="9"></li>
      </ul>
    </div>
  );
}
