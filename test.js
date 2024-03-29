// FILEPATH: /workspaces/copilot-lab1/test.js
const Calculator = require('./Calculator'); // Assuming Calculator is in a separate file

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add() should return the sum of two numbers', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('subtract() should return the difference of two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('multiply() should return the product of two numbers', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('divide() should return the division of two numbers', () => {
        expect(calculator.divide(5, 3)).toBeCloseTo(1.6666666666666667);
    });

    test('divide() should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });
});