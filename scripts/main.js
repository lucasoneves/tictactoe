console.log("hello there");

let GameBoard = new Object();
let Player = (name, character) => {
  return { name, character };
};

GameBoard.gameboard = [];
GameBoard.playerOne = Player("playerOne", "X");
GameBoard.playerTwo = Player("playerTwo", "O");
GameBoard.flowControl = {};

console.log("Gameboard ==>", GameBoard);
