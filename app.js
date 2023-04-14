const {hat, hole, fieldCharacter, pathCharacter} = require('./constants/boardChars.js');
const {Field} = require('./modules/Field.js');
const {GamePlay} = require('./modules/GamePlay.js');
const {welcomeGame, finishGame} = require('./modules/Play.js');

let inGame = true;

while (inGame) {
    const testField = new Field([
        [pathCharacter,fieldCharacter,fieldCharacter],
        [hole,fieldCharacter,fieldCharacter],
        [hat,fieldCharacter,hole]
    ])
    const gamePlayTest = new GamePlay(testField);

    welcomeGame();
    testField.print();

    while (gamePlayTest.inPlay) {
        gamePlayTest.movePlayer();
    }

    const anotherGame = finishGame();
    inGame = anotherGame;
}

console.log('\nSee you soon! (>_<)');