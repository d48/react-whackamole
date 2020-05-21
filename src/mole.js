
const moveMole = () => {
  console.log('moving mole');

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