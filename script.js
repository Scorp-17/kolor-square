const board = document.querySelector('#board')
const colors = ['#b4caed', '#8e44ad', '#474fed', '#47e5ed', '#3bf7af', '#d9f216', '#f2a516', '#ed2b58', '#c02bed', '#f55d05']
const SQUARES_NAMBER = 1850

for (let i = 0; i < SQUARES_NAMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))
  
  board.append(square)
}

function setColor(elemnt) {
   const color = getRandomColor() 
    elemnt.style.backgroundColor = color
    elemnt.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elemnt) {
  elemnt.style.backgroundColor = '#1d1d1d'
  elemnt.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}