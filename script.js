function createGameboard(){
    return arr = [];
}

function createPlayer(name, mark) {
    return {name, mark};
}

function getPlayerMove(player) {
    const position = Math.floor(Math.random() * 9);
    const mark = player.mark;
    return {mark, position};
}

function checkGameboard(board) {
    
}

function playerTurns(hP, player) {
    let play = getPlayerMove(player);
    while (hP.includes(play.position)) {
        play = getPlayerMove(player);
    }
    hP.push(play.position);
    gameboard[play.position] = play.mark;
}

function playGame() {
    let historyPlays = [];
    let i = 1;
    let winnerFound = false;
    while (i <= 9 && !winnerFound) {
        i % 2 == 0
        ? (console.log("Player Two turn!"), playerTurns(historyPlays, playerTwo))
        : (console.log("Player One turn!"), playerTurns(historyPlays, playerOne));
        i++;
    }
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);
console.log(gameboard);