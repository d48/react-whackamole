import { addMole, removeMole, removeMoles } from "./mole"

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

  it("should remove all moles classes on a list of elements", () => {
    // arrange
    let mockElement = document.createElement('li')
    let mockElement2 = document.createElement('li')
    let mockElement3 = document.createElement('li')

    // act
    mockElement.classList.add('mole')
    mockElement2.classList.add('mole')
    mockElement3.classList.add('mole')

    let mocks = [mockElement, mockElement2, mockElement3]
    removeMoles(mocks)

    // assert
    expect(mocks[0].className).not.toContain('mole')
    expect(mocks[1].className).not.toContain('mole')
    expect(mocks[2].className).not.toContain('mole')
  })
})