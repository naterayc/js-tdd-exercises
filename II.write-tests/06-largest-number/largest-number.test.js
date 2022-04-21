const { getLargestNumber } = require('./largest-number');

describe('given the getLargestNumber function', () => {
    it('for the input [3, 21, 88, 4, 36] it should return 88 without modifying the original input', () => {
        //arrange
        const numbers = [3, 21, 88, 4, 36];
        const expectedNumbers = [3, 21, 88, 4, 36];
        const output = 88;

        //act
        const result = getLargestNumber(numbers);

        //assert
        expect(result).toEqual(output);
        expect(numbers).toEqual(expectedNumbers);
    });

    it('for the following invalid inputs it should throw an error', () => {
        //arrange
        const numbers = "2, 3, 4";
        const numbersII = ["2", "3", "4"];
        const result = () => {
            getLargestNumber(numbers);
        };
        const resultII = () => {
            getLargestNumber(numbersII);
        };
        
        //act and assert
        expect(result).toThrowError('Error');
        expect(resultII).toThrowError(Error);
    });
});


// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
