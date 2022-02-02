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

// initialized 'sqaures' which stores the 9 different elements that make up the game
const squares = document.querySelectorAll('.square')
// intialized 'message' which displays the game status
const message = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/

