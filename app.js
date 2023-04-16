const {hat, hole, fieldCharacter, pathCharacter} = require('./constants/boardChars.js');
const {Field} = require('./modules/Field.js');
const {GamePlay} = require('./modules/GamePlay.js');
const {welcomeGame, finishGame} = require('./modules/Play.js');

let inGame = true;

while (inGame) {

    const fieldGen = Field.generateField(10,10);
    const newField = new Field(fieldGen);
    const gamePlayTest = new GamePlay(newField);

    welcomeGame();
    newField.print();

    while (gamePlayTest.inPlay) {
        gamePlayTest.movePlayer();
    }

    const anotherGame = finishGame();
    inGame = anotherGame;
}

console.log('\nSee you soon! (>_<)');