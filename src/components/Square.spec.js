import React  from "react"
import ReactDOM from "react-dom"
import { buildSquares, setClickedAttribute, Square } from "./Square"

describe("Square test suite", () => {
  it("should build a number of Square components", () => {
    // arrange
    let squares = buildSquares(3)
    
    // assert
    expect(squares).toHaveLength(3)
    expect(squares[0].type.name).toBe('Square')
  })

  it("should set clicked attribute to true", () => {
    // arrange
    let container = document.createElement('div')    
    ReactDOM.render(<Square num={1} scoreHandler={()=>{}} />, container)    
    let square = container.querySelector('li')

    // act
    setClickedAttribute(square)

    // assert
    expect(square.getAttribute('clicked')).toBe('true')    
  })
})