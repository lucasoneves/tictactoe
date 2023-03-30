let GameBoard = new Object();
let Player = (name, character, choices) => {
  return { name, character, choices };
};

GameBoard.gameboard = [];
GameBoard.playerOne = Player("playerOne", "X", []);
GameBoard.playerTwo = Player("playerTwo", "O", []);
GameBoard.flowControl = {};

GameBoard.flowControl = GameBoard.playerOne;
let possibleWins = [
  { values: [1, 2, 3], players: [] },
  { values: [1, 5, 9], players: [] },
  { values: [1, 4, 7], players: [] },
  { values: [2, 5, 8], players: [] },
  { values: [3, 6, 9], players: [] },
  { values: [3, 5, 7], players: [] },
  { values: [4, 5, 6], players: [] },
  { values: [7, 8, 9], players: [] },
];

function checkWin(choice, player) {
  const counter = 0;

  possibleWins.map((option) => {
    if (option.values.includes(choice)) {
      option.players.push(player);
    }
    for (let i = 0; i < option.players.length; i++) {
      const subArray = option.players;
      const allEqual = subArray.every(
        (value, index, array) => value === array[0]
      );
      if ((subArray.length >= 3) & allEqual) {
        console.log(subArray[0] + " ganhou");
      }
    }
    return null;
  });
}

(function handleClickSquare() {
  const square = document.querySelectorAll(".square");
  square.forEach((e) => {
    e.addEventListener("click", (event) => {
      const squareClicked = event.target;
      if (!squareClicked.innerHTML.length) {
        squareClicked.innerHTML += GameBoard.flowControl.character;
      } else {
        return false;
      }
      if (GameBoard.flowControl === GameBoard.playerOne) {
        GameBoard.playerOne.choices.push(+event.target.dataset.target);
        GameBoard.flowControl = GameBoard.playerTwo;
        checkWin(+event.target.dataset.target, "playerOne");
      } else {
        GameBoard.flowControl = GameBoard.playerOne;
        checkWin(+event.target.dataset.target, "playerTwo");
      }
    });
  });
})();
