function createGameboard(){
    return arr = [];
}

function createPlayer(name, mark) {
    return {name, mark};
}

function getPlayerMove(player) {
    let positionPlayed = 3;
    let playerMark = player.mark;
    return {playerMark, positionPlayed};
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

console.log(gameboard);

console.log(playerOne);
console.log(playerTwo);

const positionGameBoard = getPlayerMove(playerOne);
console.log(positionGameBoard);
gameboard[positionGameBoard.positionPlayed] = positionGameBoard.playerMark;
//getPlayerMove(playerTwo, 2);
console.log(gameboard);