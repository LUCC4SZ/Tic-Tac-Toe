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

function checkGameboard(board) {
    let winner = false;
    let auxA = [];
    let auxB = [];
    let auxC = [];
    for (let i = 0; i < board.length; i++) {
        if (i < 3) {
            auxA.push(board[i]);
        }
        if (i > 2 && i < 6) {
            auxB.push(board[i]);
        }
        if (i > 5) {
            auxC.push(board[i]);
        }
    }
    console.log(auxA);
    console.log(auxB);
    console.log(auxC);
    let [a, b, c] = auxA;
    let [d, e, f] = auxB;
    let [g, h, i] = auxC;
    if (a === b && a === c) {
        winner = true;
    }
    if (d === e && d === f) {
        winner = true;
    }
    if (g === h && g === i) {
        winner = true;
    }
    return winner;
}

function playGame(board) {
    let counterGame = 1;
    let positionsTaken = [];
    let play;
    let winningCondition = false;
    console.log(`Turn ${counterGame}`);
    play = getPlayerMove(playerOne);
    console.log(`Player one plays on position ${play.positionPlayed}!`);
    positionsTaken.push(play.positionPlayed);
    counterGame++;
    board[play.positionPlayed] = play.playerMark;
    while (counterGame <= 9 != winningCondition) { // && checkGameboard(board)
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
        if (counterGame >= 5) {
            winningCondition = checkGameboard(board);
        }
    }
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);
