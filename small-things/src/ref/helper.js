class V2 { 
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    toString()  {
        return `V2(${this.x}, ${this.y})`;
    }
}

function mid(a, b, c) {
    return a > b ? (c > a ? a : (b > c ? b : c)) : (c > b ? b : (a > c ? a : c));
}
