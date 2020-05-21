import { moveMole } from "./mole"

describe("move mole functions", () => {
  it("should add/remove mole class from a random element based on id number", () => {
    expect(moveMole()).toBe(true)
  })
})