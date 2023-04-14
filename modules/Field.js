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
}

module.exports = {Field};