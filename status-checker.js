import { checkIfNoMovesLeft } from "./board-printer.js";

/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/
let diagonal = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];

let rowData = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "O"],
];

let colData = [
  ["X", "_", "_"],
  ["X", "X", "_"],
  ["X", "O", "O"],
];

export function checkRow(board, player, rowNumber) {
  for (let col = 0; col < 3; col++) {
    if (board[rowNumber][col] !== player) {
      return false;
    }
  }
  return true;
}
console.log(checkRow(rowData, "O", 2));
export function checkColumn(board, player, columnNumber) {
  for (let row = 0; row < 3; row++) {
    if (board[row][columnNumber] !== player) {
      return false;
    }
  }
  return true;
}
console.log(checkColumn(colData, "X", 0));

export function checkDiagonal(board, player) {
  // Top-left to bottom-right
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }

  // Top-right to bottom-left
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }

  return false;
}
console.log(checkDiagonal(diagonal, "X"));

export function checkIfPlayerWon(board, player) {
  for (const row in board) {
    checkRow(board, player, row);
    checkColumn(board, player, row);
    checkDiagonal(board, player);
  }
}

export function isGameOver(board) {
  if (checkIfPlayerWon(board, "X")) {
    console.log("X has won the game!\n");
    return true;
  }

  if (checkIfPlayerWon(board, "O")) {
    console.log("O has won the game!\n");
    return true;
  }

  if (checkIfNoMovesLeft(board)) {
    console.log("Game Over - It\s a tie!\n");
    return true;
  }

  return false;
}
