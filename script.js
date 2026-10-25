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
    let positionsTaken = [];
    let play;
    play = getPlayerMove(playerOne);
    console.log(`Player one plays on position ${play.positionPlayed}!`);
    positionsTaken.push(play.positionPlayed);
    counterGame++;
    board[play.positionPlayed] = play.playerMark;
    while (counterGame <= 9) { // && checkGameboard(board)
        console.log(`Turn ${counterGame}`);
        if (counterGame % 2 == 0) {
            console.log("Player two turn!");
            play = getPlayerMove(playerTwo);
            while (positionsTaken.includes(play.positionPlayed)) {
                play = getPlayerMove(playerTwo);
            };
            positionsTaken.push(play.positionPlayed);
            board[play.positionPlayed] = play.playerMark;
            console.log(`Player two plays on position ${play.positionPlayed}!`);
        } else {
            console.log("Player one turn!");
            play = getPlayerMove(playerOne);
            while (positionsTaken.includes(play.positionPlayed)) {
                play = getPlayerMove(playerOne);
            };
            positionsTaken.push(play.positionPlayed);
            board[play.positionPlayed] = play.playerMark;
            console.log(`Player one plays on position ${play.positionPlayed}!`);
        }
        counterGame++;
    }
    console.log(board);
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);
