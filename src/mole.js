const moveMole = squares => {
  for (let square of squares) {
    removeMole(square);
  }

  let randomNum = Math.ceil(Math.random() * 9);
  addMole(squares[randomNum - 1]);
};

const addMole = element => {
  element && element.classList.add("mole");
  return element;
};

const removeMole = element => {
  element && element.classList.remove("mole");
  return element;
};

export { addMole, moveMole, removeMole };
