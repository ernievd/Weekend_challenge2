class History {
    constructor(first, second, operator) {
        this.first = first;
        this.second = second;
        this.operator = operator;
    }
     randomNumber () {
        let random = Math.floor((Math.random() * this.max) + 1);
        return random;
    }
}

module.exports = RandomNumber;