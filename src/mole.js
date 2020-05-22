
const moveMole = (squares) => {  
  for (let square of squares) {
    console.log(square)
    removeMole(square)
  }
   
  let randomNum = Math.ceil(Math.random() * 9)
  addMole(squares[randomNum])
};

const addMole = (element) => {
  element.classList.add('mole')
  return element;
}

const removeMole = (element) => {
  element.classList.remove('mole')
  return element
}

export { addMole, moveMole, removeMole };