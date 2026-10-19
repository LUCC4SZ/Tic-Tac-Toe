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

function checkPlay(currentPlay, plays) {
    plays.forEach(element => {
        if (element === currentPlay) {
            return true;
        } else {
            return false;
        }
    });
}

function playGame(board) {
    let counterGame = 1;
    while (counterGame <= 9) { // && checkGameboard(board)
        console.log(`Turn ${counterGame}`);
        let play;
        let positionsTaken = [];
        console.log(positionsTaken);
        let newPlay = false;
        play = getPlayerMove(playerOne);
        positionsTaken[play.positionPlayed] = play.playerMark;
        counterGame++;
        if (counterGame % 2 == 0) {
            console.log("Player two turn!");
            do {
                play = getPlayerMove(playerTwo);
                newPlay = checkPlay(play.positionPlayed, positionsTaken);
            } while (!newPlay);
            positionsTaken[play.positionPlayed] = play.playerMark;
            console.log(`Player two plays on position ${play.positionPlayed}!`);
        } else {
            console.log("Player one turn!");
            do {
                play = getPlayerMove(playerOne);
                newPlay = checkPlay(play.positionPlayed, positionsTaken);
            } while (!newPlay);
            positionsTaken[play.positionPlayed] = play.playerMark;
            console.log(`Player one plays on position ${play.positionPlayed}!`);
        }
        console.log(`Final state: ${positionsTaken}`);
        counterGame++;
    }
    console.log(board);
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);