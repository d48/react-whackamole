import React from "react";

function buildSquares(num) {
  let result = []
  for (let i = 1; i <= num; i++) {
    result.push(<Square num={i} key={"square"+i}/>)
  }
  return result;
}

function Square(props) {
  const {num} = props;

  return (
    <li className="square" id={num}></li>
  )
}

export { buildSquares, Square };