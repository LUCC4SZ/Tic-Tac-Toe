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
    let play;
    let historyPlays = [];
    for (let i = 1; i <= 9; i++) {
        if (i % 2 == 0) {
            console.log("Player two turn!");
            play = getPlayerMove(playerTwo);
            while (historyPlays.includes(play.position)) {
                play = getPlayerMove(playerTwo);
            }
            console.log(`Player two plays on position ${play.position}`);
        } else {
            console.log("Player one turn!");
            play = getPlayerMove(playerOne);
            while (historyPlays.includes(play.position)) {
                play = getPlayerMove(playerOne);
            }
            console.log(`Player one plays on position ${play.position}`);
        }        
        historyPlays.push(play.position);
        board[play.position] = play.mark;
    }
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);
console.log(gameboard);