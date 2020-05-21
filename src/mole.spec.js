import { addMole, removeMole } from "./mole"

describe("mole test suite", () => {
  it("should add a .mole class to an element", () => {
    // arrange
    let mockElement = document.createElement('li')

    // act
    let element = addMole(mockElement)

    // assert
    expect(element.className).toContain('mole')
  })

  it("should remove a .mole class from an element", () => {
    // arrange
    let mockElement = document.createElement('li')

    // act
    mockElement.classList.add('mole')
    let element = removeMole(mockElement)

    // assert
    expect(element.className).not.toContain('mole')   
  })

})