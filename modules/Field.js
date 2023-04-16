const {hat, hole, fieldCharacter, pathCharacter} = require('../constants/boardChars.js');

class Field {
    constructor(arr) {
        this.array = arr;
        this.xLength = arr[0].length;
        this.yLength = arr.length;
    }

    print() {
        this.array.forEach((x) => {
            console.log(x.join(' '));
        })
    }

    static generateField(width, height, holePerc = 0.1) {
        const holes = Math.round(holePerc*(width*height));
        const board = [];

        const genRandCoord = () => {   
            let randX = Math.floor(Math.random()*(height));
            let randY = Math.floor(Math.random()*(width));

            while (randX === 0 && randY === 0) {
                randX = Math.floor(Math.random()*(height));
                randY = Math.floor(Math.random()*(width));
            }

            return [randX, randY];
        }

        let holeHatPos = new Set();
        let uniquePos = [];

        while (uniquePos.length < holes + 1) {
                let genPos = genRandCoord();
                holeHatPos.add(genPos);
                uniquePos = Array.from(
                    new Map([...holeHatPos].map((p) => [p.join(), p])).values()
                  )
        }

        const hatPos = uniquePos[0];
        const randHolePos = uniquePos.slice(1);

        let arr = Array(height).fill().map(() => Array(width).fill(fieldCharacter));
        arr[0][0] = pathCharacter;
        arr[hatPos[0]][hatPos[1]] = hat;

        
        for (let coord of randHolePos) {
            arr[coord[0]][coord[1]] = hole;
        }



        return arr;

    }
}

module.exports = {Field};