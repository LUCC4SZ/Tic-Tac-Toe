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

function playGame(board) {
    let counterGame = 1;
    while (counterGame <= 9) { // && checkGameboard(board)
        console.log(`Turn ${counterGame}`);
        let play;
        let positionsTaken = [];
        console.log(positionsTaken);
        let newPlay = false;
        if (!(counterGame % 2 == 0)) {
            console.log("Player one turn!");
            do {
                play = getPlayerMove(playerOne);
                if (!(positionsTaken.includes(play))) {
                    positionsTaken.push(play.positionPlayed);
                    console.log(`State of the board: ${positionsTaken}`);
                    newPlay = true;
                }
            } while (!newPlay);
            console.log(`Player one plays on position ${play.positionPlayed}!`);
        } else {
            console.log("Player two turn!");
            do {
                play = getPlayerMove(playerTwo);
                if (!(positionsTaken.includes(play))) {
                    positionsTaken.push(play.positionPlayed);
                    console.log(`State of the board: ${positionsTaken}`);
                    newPlay = true;
                }
            } while (!newPlay);
            console.log(`Player two plays on position ${play.positionPlayed}!`);
        }
        console.log(`Final state: ${positionsTaken}`);
        counterGame++;
    }
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);