const prompt = require('prompt-sync')({sigint: true});

const welcomeGame = () => {
    console.log("Welcome to the maze game! Let's begin...\n");
    console.log("Here is the game board, you're the * symbol! Try to get to the hat without falling down the holes...")
}

const finishGame = () => {
    console.log("Thanks for playing, would you like to play again?");
    let playOn = prompt('(yes or no) ');

    if (playOn.toLowerCase().startsWith('y')) {
        return true;
    } else {
        return false;
    }
}

module.exports = {welcomeGame, finishGame};