function createGameboard(){
    const arr = [];
    return {arr};
}

function createPlayer(name, mark) {
    return {name, mark};
}

function getPlayerMove(player, mark) {
    let pos;
    gameboard[pos] = mark;
}

// const gameflow = ((gb) => {
//     let winCondition = false;
//     let fullGameboard = false;
//     let turn = 1;
//     while (!fullGameboard && !winCondition) {
//         if (!turn % 2 == 0) {
//             gb = getPlayerOneMove();
//         } else {
//             gb = getPlayerTwoMove();
//         }
//         winCondition = checkGameBoard(gb);
//     }
// })(gameboard);

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

console.log(gameboard);

console.log(playerOne);
console.log(playerTwo);