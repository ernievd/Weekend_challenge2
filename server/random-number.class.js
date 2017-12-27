class RandomNumber {
    constructor(max) {
        this.max = max;
    }
     randomNumber () {
        let random = Math.floor((Math.random() * this.max) + 1);
        return random;
    }
}

module.exports = RandomNumber;