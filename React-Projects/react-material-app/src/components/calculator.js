class Calculator {
    add(x, y) {
        return x + y;
    }
    sub(x, y) {
        return x - y;
    }
    mul(x, y) {
        return x * y;
    }

    sumSq(x, y) {
        let result = this.add(x, y);
        return result * result;
    }
}

export default new Calculator();