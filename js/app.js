/*-------------------------------- Constants --------------------------------*/

// initialized the variable winCondition to list all the different win conditions
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

/// initialized the variables board, turn, and winner
let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const message = document.querySelector('#message')

const resetButton = document.getElementById('reset-button')

/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/

