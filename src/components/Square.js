import React from "react";

const buildSquares = (num, scoreHandler) => {
  let result = []
  for (let i = 1; i <= num; i++) {
    result.push(<Square num={i} key={"square"+i} scoreHandler={scoreHandler} />)
  }
  return result;
}

const clickHandler = (setScoreHandler) => {
  // check if a mole, increment score if so
  setScoreHandler(prev => prev + 1)
}

const Square = (props) => {
  const {num, scoreHandler} = props;

  return (
    <li className="square" id={num} onClick={()=> {clickHandler(scoreHandler)}}></li>
  )
}

export { buildSquares, Square };