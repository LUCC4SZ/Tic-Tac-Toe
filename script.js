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
    let play;
    let row;
    let col;
    for (let i = 0; i <= 9; i++) {
        play = getPlayerMove(playerOne);
        row = play.position[0];
        col = play.position[1];
        board[row, col] = play.playerMark;
        play = getPlayerMove(playerTwo);
        col = play.position[0];
        row = play.position[1];
        board[row, col] = play.playerMark;
    }
    console.log(board);
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);
