import Calculator from '../components/calculator';

/** Test suite/test case syntax
describe('suit description', () => {
    test('test description', () => {
        // test case logic
    });
    test.skip('test description', () => {
        // test case logic
    });
    describe('nested suite description', () => {
        test.only('test description', () => {
            // test case logic
        });
        test('test description', () => {
            // test case logic
        });
    })
});
describe('suite description', function () {
    test('test description', function () {
        // test case logic
    });
    test('test description', function () {
        // test case logic
    });
    describe('nested suite description', function () {
        test('test description', function () {
            // test case logic
        });
        test('test description', function () {
            // test case logic
        });
    });
});
*/

describe('Calculator test suite', () => {
    test('verify add() method', () => {
        const result = Calculator.add(10, 20);
        expect(result).toBe(30);
    });

    test('verify sub() method', () => {
        const result = Calculator.sub(10, 20);
        expect(result).toBe(-10);
    });
    test('verify mul() method', () => {
        const result = Calculator.mul(10, 20);
        expect(result).toBe(200);
    });
    test('null test', () => {
        expect(null).toBe(null);
    });

    test('length test', () => {
        expect([10, 20, 30].length).toBe(3);
    });

    test('verify given element present in array or not', () => {
        expect([10, 20, 30][1]).toBe(20);
    });

    // Mock
    test('mock test to return array', () => {
        let mockFn = jest.fn(() => [10, 20]);
        expect(mockFn()[1]).toBe(20);
    });
    test('mock test to return array', () => {
        let mockFn = jest.fn(() => 5); // 10/2 = 5
        expect(mockFn()).toBe(5);

        // 15 lines
        // 2nd line depending others code - mock
        // validate remaining 13 line
    });

    test('mock test to return obj', () => {
        let person = {
            id: 101,
            name: 'Sam'
        }
        let mockFn = jest.fn(() => person);
        expect(mockFn().id).toBe(101);
    });

    test('spy test on add method', () => {
        const spy = jest.spyOn(Calculator, 'add');
        const result = Calculator.sumSq(10, 10);
        expect(spy).toHaveBeenCalled();
        // expect(spy).not.toHaveBeenCalled();
        expect(result).toBe(400);
    });
})

