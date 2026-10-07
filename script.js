function createGameboard(){
    const arr = [];
    return {arr};
}

function createPlayer(name) {
    return {name};
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca");
const playerTwo = createPlayer("Begoodey");

console.log(gameboard);

console.log(playerOne);
console.log(playerTwo);