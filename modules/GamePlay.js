const prompt = require('prompt-sync')({sigint: true});
const {hat, hole, fieldCharacter, pathCharacter} = require('../constants/boardChars.js');

class GamePlay { 
    constructor(field) {
        this.field = field;
        this.moves = 0;
        this.inPlay = true;
        this._pos = [0,0];
    }

    get pos() {
        return this._pos;
    }

    movePlayer() {
        let move = prompt('What direction would you like to move? (up, down, left, right) ');
        let newPos;

        switch (move) {
            case 'up':
            case 'u':
                newPos = [this._pos[0], this._pos[1] + 1];
                break;
            case 'down':
            case 'd':
                newPos = [this._pos[0], this._pos[1] - 1];
                break;
            case 'right':
            case 'r':
                newPos = [this._pos[0] + 1, this._pos[1]];
                break;
            case 'left':
            case 'l':
                newPos = [this._pos[0] - 1, this._pos[1]];
                break;
        
            default:
                console.log('Invalid choice: please choose up, down, right left')
                return this._pos;
        }

        if (newPos[0] < 0 || newPos[1] > 0 || newPos[0] > this.field.xLength - 1 || newPos[1] < -(this.field.yLength - 1)) {
            console.log('Move invalid: move takes you off grid');
            this.field.print();
            return this._pos;
        }

        const [x,y] = this._pos;
        this.moves += 1;
        this._pos = newPos;

        this.checkPlayer();

        if (this.inPlay) {
            const [xNew,yNew] = this._pos;
            this.field.array[-yNew][xNew] = pathCharacter;

            this.field.print();
        }
    }

    checkPlayer() {
        const [x,y] = this._pos;
        const gridPos = this.field.array[-y][x];

        if (gridPos === hole) {
            console.log('YOU FELL DOWN A HOLEEeeeeeeeeee......\n');
            console.log(`You lost in ${this.moves} moves`);
            return this.inPlay = false;
        } else if (gridPos === hat) {
            console.log('You found da hat, well done :) \n');
            console.log(`You won in ${this.moves} moves`);
            return this.inPlay = false;
        } else {
            console.log(`Move ${this.moves} completed...\n`);
        }
    }
}

module.exports = {GamePlay};