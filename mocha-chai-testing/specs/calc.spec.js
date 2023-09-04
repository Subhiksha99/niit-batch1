const Calculator = require('../src/calc.js');
const chai = require('chai');
const sinon = require('sinon');

// get expect method from chai for assertion
const expect = chai.expect;


// run test cases
// npm run test

// skip suite
describe.skip('Calculator Suite', function () { })

// skip test cases
xit('', () => { });

// using sinon we can spy functions called in another function
/*
- function been called
- if yes, how many times called
- what arguments passed
- Did it return something?
- What was returned

 - install sinon
 npm install sinon

 - import 
 const sinon = require('sinon');
*/

// Define suite
describe('Calculator test cases', () => {
    // Create obj
    const calcObj = new Calculator();

    xit('Verify add() method is adding two numbers or not', () => {
        const result = calcObj.add(2, 3);
        // validation
        expect(result).equal(5);
    });

    xit('sub', () => {
        const result = calcObj.sub(2, 3);
        // validation
        expect(result).equal(-1);
    });

    xit('mul()', () => {
        const result = calcObj.mul(2, 3);
        // validation
        expect(result).equal(6);
    });

    xit('Verify div() ', () => {
        const result = calcObj.div(4, 2);
        // validation
        expect(result).equal(2);
    });

    xit('verify div function with 0 as numerator', () => {
        expect(calcObj.div(0, 10)).to.be.equal(0);
    });

    xit('verify div function with 0 as denominator', () => {
        expect(calcObj.div(20, 0)).to.be.equal(Infinity);
    });

    xit('spy the add method', () => {
        let spy = sinon.spy(calcObj, 'add');
        calcObj.squareSum(10, 10); // calls add functions
        //sinon.assert.calledOnce(spy);
        //sinon.assert.calledTwice(spy);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(100, 100)).to.be.true;
    });

    it('spy the add method - negative scenario', () => {
        let spy = sinon.spy(calcObj, 'add');
        calcObj.squareSum(10, 10); // calls add functions
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(10, 10)).to.be.false;
    });

    // Validate call back function is called once or not
    it('spy callback function', () => {
        let cb = sinon.spy();
        calcObj.callTheCallback(cb);
        expect(cb.calledOnce).to.be.true;
    });

})

