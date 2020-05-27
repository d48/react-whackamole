import React from "react";

const buildSquares = (num, scoreHandler) => {
  let result = []
  for (let i = 1; i <= num; i++) {
    result.push(<Square num={i} key={"square"+i} scoreHandler={scoreHandler} />)
  }
  return result;
}

const clickHandler = (event, setScoreHandler) => {
  // check if a mole, increment score if so
  if (event.target.getAttribute('data-is-mole') === 'true') {
    setScoreHandler(prev => prev + 1)
  }
}

const Square = (props) => {
  const {num, scoreHandler} = props;

  return (
    <li className="square" id={num} onClick={(event)=> {clickHandler(event, scoreHandler)}}></li>
  )
}

export { buildSquares, Square };