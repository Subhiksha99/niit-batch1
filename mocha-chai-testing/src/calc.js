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

    div(x, y) {
        return x / y;
    }

    // calling function inside another function
    squareSum(x, y) {
        let result = this.add((x * x), (y * y));
        return result;
    }

    // function with call back function as an input argument
    callTheCallback(cb) {
        cb();
    }
}

module.exports = Calculator;