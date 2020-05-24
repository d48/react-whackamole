const moveMole = squares => {
  removeMoles(squares);

  let randomNum = Math.ceil(Math.random() * 9);
  addMole(squares[randomNum - 1]);
};

const addMole = element => {
  element.classList.add("mole");
  return element;
};

const removeMoles = squares => {
  for (let square of squares) {
    removeMole(square);
  }
}

const removeMole = element => {
  element.classList.remove("mole");
  return element;
};

export { addMole, moveMole, removeMole, removeMoles };
