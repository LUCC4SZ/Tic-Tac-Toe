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

function checkHorizontal(pos, board) {
    if (board[pos] == board[pos + 1] && board[pos] == board[pos + 2]) {
        return true;
    } else {
        return false;
    }
}

function checkVertical(pos, board) {
    if (board[pos] == board[pos + 3] && board[pos] == board[pos + 6]) {
        return true;
    } else {
        return false;
    }
}

function checkDiagonal(pos, board) {
    switch (pos) {
        case 0:
            if (board[pos] == board[pos + 4] && board[pos + 8]) {
                return true;
            } else {
                return false;
            }
        case 2:
            if (board[pos] == board[pos + 2] && board[pos + 4]) {
                return true;
            } else {
                return false;
            }
        default:
            break;
    }
}

function checkGameboard(board) {
    let auxA = [];
    let auxB = [];
    let auxC = [];
    let lanes = [];
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

        switch (i) {
            case 0:
                lanes.push(checkHorizontal(i, board));
                lanes.push(checkVertical(i, board));
                lanes.push(checkDiagonal(i, board));
                console.log(`${i}: ${lanes}`);
                if (lanes.includes(true)) {
                    return true;
                }
                break;
            case 1:
                lanes.push(checkVertical(i, board));
                console.log(`${i}: ${lanes}`);
                if (lanes.includes(true)) {
                    return true;
                }
                break;
            case 2:
                lanes.push(checkVertical(i, board));
                lanes.push(checkDiagonal(i, board));
                console.log(`${i}: ${lanes}`);
                if (lanes.includes(true)) {
                    return true;
                }
            case 3:
                lanes.push(checkHorizontal(i, board));
                console.log(`${i}: ${lanes}`);
                if (lanes.includes(true)) {
                    return true;
                }
                break;
            case 6:
                lanes.push(checkHorizontal(i, board));
                console.log(`${i}: ${lanes}`);
                if (lanes.includes(true)) {
                    return true;
                }
                break;
            default:
                console.log(auxA);
                console.log(auxB);
                console.log(auxC);
                break;
        }
    }
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
    while (counterGame <= 9 != winningCondition) {
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
