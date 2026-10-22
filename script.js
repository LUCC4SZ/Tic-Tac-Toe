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
    let state;
    console.log(currentPlay);
    for (let i = 0; i < plays.length; i++) {
        if (plays[i] == currentPlay) {
            console.log("The position is already taken.");
            state = true;
        } else {
            console.log("The position is free.");
            state = false;
        }
    };
    // plays.forEach(element => {
    //     if (element === currentPlay) {
    //         console.log("The position is already taken.");
    //         state = true;
    //     } else {
    //     console.log("The position is free.");
    //         state = false;
    //     }
    // });
    return state;
}

function playGame(board) {
    let counterGame = 1;
    let positionsTaken = [];
    for (let i = 0; i < positionsTaken.length; i++) {
        positionsTaken.push(null);
    }
    let play;
    play = getPlayerMove(playerOne);
    counterGame++;
    console.log(play.positionPlayed);
    positionsTaken[play.positionPlayed] = play.playerMark;
    console.log(positionsTaken);
    while (counterGame <= 9) { // && checkGameboard(board)
        console.log(`Turn ${counterGame}`);
        console.log(positionsTaken);
        let newPlay = false;
        if (counterGame % 2 == 0) {
            console.log("Player two turn!");
            do {
                play = getPlayerMove(playerTwo);
                newPlay = checkPlay(play.positionPlayed, positionsTaken);
            } while (newPlay);
            positionsTaken[play.positionPlayed] = play.playerMark;
            console.log(`Player two plays on position ${play.positionPlayed}!`);
        } else {
            console.log("Player one turn!");
            do {
                play = getPlayerMove(playerOne);
                newPlay = checkPlay(play.positionPlayed, positionsTaken);
            } while (newPlay);
            positionsTaken[play.positionPlayed] = play.playerMark;
            console.log(`Player one plays on position ${play.positionPlayed}!`);
        }
        console.log(positionsTaken);
        board = positionsTaken;
        counterGame++;
    }
    //console.log(board);
}

const gameboard = createGameboard();

const playerOne = createPlayer("Lucca", "X");
const playerTwo = createPlayer("Begoodey", "O");

playGame(gameboard);

// const positionsTaken = [];

// let play = getPlayerMove(playerOne);
// positionsTaken[play.positionPlayed] = play.playerMark;
// console.log(positionsTaken);
// let newPlay = checkPlay(play.positionPlayed, positionsTaken);
// console.log(newPlay);

// play = getPlayerMove(playerTwo);
// positionsTaken[play.positionPlayed] = play.playerMark;
// console.log(positionsTaken);
// newPlay = checkPlay(play.positionPlayed, positionsTaken);
// console.log(newPlay);