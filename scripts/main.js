let GameBoard = new Object();
let board = document.querySelector(".board");

let Player = (name, character, choices) => {
  return { name, character, choices };
};

GameBoard.gameboard = [];
GameBoard.flowControl = {};
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
        alert(subArray[0] + " ganhou");
        GameBoard.flowControl.status = "ended";
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
        console.log(GameBoard);
        squareClicked.innerHTML += GameBoard.flowControl.player;
      } else {
        return false;
      }
      if (GameBoard.flowControl.player.name === GameBoard.playerOne.name) {
        GameBoard.playerOne.choices.push(+event.target.dataset.target);
        GameBoard.flowControl = {
          player: GameBoard.playerTwo,
          status: GameBoard.flowControl.status,
        };
        checkWin(+event.target.dataset.target, "playerOne");
      } else {
        GameBoard.flowControl = {
          player: GameBoard.playerOne,
          status: GameBoard.flowControl.status,
        };
        checkWin(+event.target.dataset.target, "playerTwo");
      }
    });
  });
})();

function startGame() {
  const playerOne = document.getElementsByName("player-one")[0].value;
  const playerTwo = document.getElementsByName("player-two")[0].value;
  GameBoard.playerOne = Player(playerOne, "X", []);
  GameBoard.playerTwo = Player(playerTwo, "O", []);
  GameBoard.flowControl = { status: "running", player: GameBoard.playerOne };
}
