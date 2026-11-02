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

function playGame(board) {
    let play = getPlayerMove(playerOne);
    console.log(play);
    let historyPlays = [];
    historyPlays.push(play.position);
    console.log(historyPlays);
    play = getPlayerMove(playerOne);
    while (historyPlays.includes(play.position)) {
        play = getPlayerMove(playerOne);
    }
    historyPlays.push(play.position);
    console.log(historyPlays);
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);
