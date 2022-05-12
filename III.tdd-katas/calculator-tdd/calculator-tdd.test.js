const { calculator } = require('./calculator-tdd');

describe('given the calculator function', () => {
    it('for an empty input it should return 0', () => {
        //arrange
        const input = '';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(0);
    });
    it('for the input 3 it should return 3', () => {
        //arrange
        const input = '3';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(3);
    });
    it('for the input 5, 1 it should return 6', () => {
        //arrange
        const input = '5, 1';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(6);
    });
    it('for the input 22,1,10 it should return 33', () => {
        //arrange 
        const input = '22, 1, 10';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(33);
    });
    it('for the input 200,100,1000 it should return 1300', () => {
        //arrange 
        const input = '200, 100, 1000';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(1300);
    });
    it('for the input 1\n2,3 it should return 6', () => {
        //arrange
        const input = '1\n2,3';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(6);
    });
    it('for the input //;\n1;2 it should return 3', () => {
        //arrange
        const input = '//;\n1;2';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(3);
    });
    it('for the input \n1;2\n4;5 it should return 12', () => {
        //arrange
        const input = '\n1;2\n4;5';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(12);
    });
    it('for the input 1;2;4;5 it should return 12', () => {
        //arrange
        const input = '1;2;4;5';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(12);
    });
    it('for the input 1,4,-1 it should throw an error message that includes the negative numbers', () => {
        //arrange
        const input = '1,-4,-1';
        const result = () => calculator(input);
        //act and assert
        expect(result).toThrowError('Negatives are not allowed: -4,-1');
    });
    it('for the input 2000,100,1000 it should return 1100', () => {
        //arrange 
        const input = '2000, 100, 1000';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(1100);
    });
    it('for the input 100,20,2000 it should return 120', () => {
        //arrange
        const input = '100,20,2000';
        //act
        const result = calculator(input);
        //assert
        expect(result).toBe(120);
    });
});