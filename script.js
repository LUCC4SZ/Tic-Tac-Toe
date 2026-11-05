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

function checkRows(rowIndex) {
    if (rowIndex !== undefined) {
        if (gameboard[rowIndex] == gameboard[rowIndex + 1] && gameboard[rowIndex] == gameboard[rowIndex + 2]) {
            console.log(`Winning lane: ${rowIndex} + ${rowIndex + 1} + ${rowIndex + 2}`)
            return true;
        } else {
            return false;
        }
    }
}

function checkColumns(columnIndex) {
    if (columnIndex !== undefined) {
        if (gameboard[columnIndex] == gameboard[columnIndex + 3] && gameboard[columnIndex] == gameboard[columnIndex + 6]) {
            console.log(`Winning lane: ${columnIndex} + ${columnIndex + 3} + ${columnIndex + 6}`);
            return true;
        } else {
            return false;
        }
    }
}

function checkDiagonals(diagonalIndex) {
    if (diagonalIndex !== undefined) {
        switch (diagonalIndex) {
            case 0:
                if (gameboard[diagonalIndex] == gameboard[diagonalIndex + 4]
                    && gameboard[diagonalIndex] == gameboard[diagonalIndex + 8]) {
                        console.log(`Winning lane: ${diagonalIndex} + ${diagonalIndex + 4} + ${diagonalIndex + 8}`);
                        return true;
                    } else {
                        return false;
                    }
            case 2:
                if (gameboard[diagonalIndex] == gameboard[diagonalIndex + 2]
                    && gameboard[diagonalIndex] == gameboard[diagonalIndex + 4]) {
                        console.log(`Winning lane: ${diagonalIndex} + ${diagonalIndex + 2} + ${diagonalIndex + 4}`);
                        return true;
                    } else {
                        return false;
                    }
        }
    }
}

function checkGameboard() {
    let winningCondition = false;
    for (let i = 0; i < 9; i++) {
        if (i == 0 || i == 3 || i == 6) {
            console.log(i);
            console.log("Checking rows...");
            winningCondition = checkRows(i);
        }
        if (i == 0 || i == 1 || i == 2) {
            console.log(i);
            console.log("Checking columns...");
            winningCondition = checkColumns(i);
        }
        if (i == 0 || i == 2) {
            console.log(i);
            console.log("Checking diagonals...");
            winningCondition = checkDiagonals(i);
        }
    }
    return winningCondition;
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
        if (i >= 5) {
            winnerFound = checkGameboard();
        }
        i++;
    }
    if (!winnerFound) {
        console.log("Tie!");
    }
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);
console.log(gameboard);