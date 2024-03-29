// All code should be written in this file.
// Set variables to moves and value
var playerOneMoveOneType = undefined;
var playerOneMoveTwoType = undefined;
var playerOneMoveThreeType = undefined;
var playerTwoMoveOneType = undefined;
var playerTwoMoveTwoType = undefined;
var playerTwoMoveThreeType = undefined;
var playerOneMoveOneValue = undefined;
var playerOneMoveTwoValue = undefined;
var playerOneMoveThreeValue = undefined;
var playerTwoMoveOneValue = undefined;
var playerTwoMoveTwoValue = undefined;
var playerTwoMoveThreeValue = undefined;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType,

  moveTwoValue, moveThreeType, moveThreeValue) {
// Validate inputs
if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue ||
  !moveThreeType || !moveThreeValue) {
  return;
}


if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) ||
  !isValidMoveType(moveThreeType)) {
  return;
}

if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) ||
  !isValidMoveValue(moveThreeValue)) {
  return;
}



if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
  return;
}
// Assigning the moves and the values to the right variable
if (player === 'Player One') {
  playerOneMoveOneType = moveOneType;
  playerOneMoveOneValue = moveOneValue;
  playerOneMoveTwoType = moveTwoType;
  playerOneMoveTwoValue = moveTwoValue;
  playerOneMoveThreeType = moveThreeType;
  playerOneMoveThreeValue = moveThreeValue;
} else if (player === 'Player Two') {
  playerTwoMoveOneType = moveOneType;
  playerTwoMoveOneValue = moveOneValue;
  playerTwoMoveTwoType = moveTwoType;
  playerTwoMoveTwoValue = moveTwoValue;
  playerTwoMoveThreeType = moveThreeType;
  playerTwoMoveThreeValue = moveThreeValue;
}


}
// Validate Move type
function isValidMoveType(moveType) {
  return (moveType === 'rock') || (moveType === 'paper') ||
  (moveType === 'scissors');
}
// Make sure that the value of the move is between 1 and 99
function isValidMoveValue(moveValue) {
  return (moveValue >= 1) && (moveValue <= 99);
}

// Get the winner
function getRoundWinner(roundNumber) {
  switch(roundNumber) {
    case 1:
    return getMoveWinner(playerOneMoveOneType,
     playerOneMoveOneValue,
     playerTwoMoveOneType,
     playerTwoMoveOneValue);
    case 2:
    return getMoveWinner(playerOneMoveTwoType,
     playerOneMoveTwoValue,
     playerTwoMoveTwoType,
     playerTwoMoveTwoValue);
    case 3:
    return getMoveWinner(playerOneMoveThreeType,
     playerOneMoveThreeValue,
     playerTwoMoveThreeType,
     playerTwoMoveThreeValue);
    default:
    return null;
  }

  // Set the rules of the games, with the move type and the value
  function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType,
   playerTwoMoveValue) {
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType ||
      !playerTwoMoveValue) {


      return null;
  }

  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One';
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }
  if (playerOneMoveType === 'rock') {
    if (playerTwoMoveType === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
  else if (playerOneMoveType === 'paper') {
    if (playerTwoMoveType === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
  else {
    if (playerTwoMoveType === 'paper') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }


  // Return the winner of the game
  function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
  }
  playerOneWins = 0;
  playerTwoWins = 0;



  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  addWin(roundOneWinner);
  addWin(roundTwoWinner);
  addWin(roundThreeWinner);

  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  }

  // Add a point to the winner

  function addWin(winner) {
    if (winner === 'Player One') {


      playerOneWins = (playerOneWins + 1) || 1;
    } else if (winner === 'Player Two') {
      playerTwoWins = (playerTwoWins + 1) || 1;
    }
  }



// Creating random moves and random values if the game is against the computer
function setComputerMoves() {
  const moves = ['rock', 'paper', 'scissors'];
  const moveOneType = moves[Math.floor(Math.random() * 3)];
  const moveTwoType = moves[Math.floor(Math.random() * 3)];
  const moveThreeType = moves[Math.floor(Math.random() * 3)];
  const moveOneValue = Math.floor(Math.random() * 96) + 1;
  const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
  const moveThreeValue = 99 - moveOneValue - moveTwoValue;
  setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType,
   moveTwoValue, moveThreeType, moveThreeValue);
}


