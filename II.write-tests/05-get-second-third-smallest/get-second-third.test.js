const { getSecondThird } = require('./get-second-third');

describe('given the getSecondThird function', () => {
    it('should return the second and third positions of the array, without modifying the original input', () => {
        //arrange
        const numbers = [90, 5, 11, 8, 6];
        const expectedNumbers = [90, 5, 11, 8, 6];
        const output = [6, 8];
        //act
        const result = getSecondThird(numbers);
        //assert
        expect(result).toEqual(output);
        expect(numbers).toEqual(expectedNumbers)
    });
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
