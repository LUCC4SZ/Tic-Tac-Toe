function createGameboard(){
    return arr = [[],[]];
}

function createPlayer(name, mark) {
    return {name, mark};
}

function getPlayerMove(player) {
    let positionRow = Math.floor(Math.random() * 9);
    let positionColumn = Math.floor(Math.random() * 9);
    let playerMark = player.mark;
    return {playerMark, position: [positionRow, positionColumn]};
}

function checkGameboard(board) {
    
}

function playGame(board) {
    
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

console.log(getPlayerMove(playerOne));
console.log(getPlayerMove(playerTwo));

playGame(gameboard);
