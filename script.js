function createGameboard(){
    return arr = [];
}

function createPlayer(name, mark) {
    return {name, mark};
}

function getPlayerMove(player) {
    let positionPlayed = Math.floor(Math.random() * 9);
    let playerMark = player.mark;
    return {playerMark, positionPlayed};
}

function playGame(board) {
    let counterGame = 1;
    while (counterGame <= 9) { // && checkGameboard(board)
        console.log(`Turn ${counterGame}`);
        let play;
        console.log(counterGame % 2);
        if (!(counterGame % 2 == 0)) {
            console.log("Player one turn!");
            play = getPlayerMove(playerOne);
            console.log(play);
        } else {
            console.log("Player two turn!");
            play = getPlayerMove(playerTwo);
            console.log(play);
        }
        counterGame++;
    }
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);