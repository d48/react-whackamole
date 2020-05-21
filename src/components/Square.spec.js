import { buildSquares } from "./Square"

describe("Square test suite", () => {
  it("should build a number of Square components", () => {
    // arrange
    let squares = buildSquares(3)
    
    // assert
    expect(squares).toHaveLength(3)
    expect(squares[0].type.name).toBe('Square')
  })
})