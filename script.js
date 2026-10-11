function createGameboard(){
    return arr = [];
}

function createPlayer(name, mark) {
    return {name, mark};
}

function getPlayerMove(player, pos) {
    return gameboard[pos] = player.mark;
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

getPlayerMove(playerOne, 0);
getPlayerMove(playerTwo, 2);
console.log(gameboard);