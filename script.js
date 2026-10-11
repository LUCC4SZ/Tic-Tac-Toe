function createGameboard(){
    const arr = [];
    return {arr};
}

function createPlayer(name) {
    return {name};
}

function gameflow(gb) {
    let winCondition = false;
    let fullGameboard = false;
    let turn = 1;
    while (!fullGameboard && !winCondition) {
        if (!turn % 2 == 0) {
            gb = getPlayerOneMove();
        } else {
            gb = getPlayerTwoMove();
        }
        winCondition = checkGameBoard(gb);
    }
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca");
const playerTwo = createPlayer("Begoodey");

console.log(gameboard);

console.log(playerOne);
console.log(playerTwo);