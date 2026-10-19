function createGameboard(){
    return arr = [];
}

function createPlayer(name, mark) {
    return {name, mark};
}

function getPlayerMove(player) {
    let positionPlayed = Math.floor(Math.random() * 9);
    console.log(positionPlayed);
    let playerMark = player.mark;
    return {playerMark, positionPlayed};
}

function playGame(board) {
    let counterGame = 1;
    while (counterGame <= 9) { // && checkGameboard(board)
        console.log(`Turn ${counterGame}`);
        let play;
        if (!counterGame % 2 == 0) {
            play = getPlayerMove(playerOne);
            console.log(play);
        } else {
            play = getPlayerMove(playerTwo);
            console.log(play);
        }
        counterGame++;
    }
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

playGame(gameboard);