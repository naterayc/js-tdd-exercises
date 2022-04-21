const { getEven } = require('./get-even-numbers');

describe('given the getEven function', () => {
    it('for the input [22, 13, 73, 82, 4] it should return [22, 82, 4]', () => {
        //arrange
        const input = [22, 13, 73, 82, 4];
        const output = [22, 82, 4];

        //act
        const result = getEven(input);

        //assert
        expect(result).toEqual(output);
    });

    it('for the input [] it should return []', () => {
        //arrange
        const input = [];
        const output = [];

        //act
        const result = getEven(input);

        //assert
        expect(result).toEqual(output);
    });

    it('for invalid inputs it should throw an error', () => {
        //arrange
        const input = "22, 13, 73, 82, 4";
        const inputII = 22;
        const result = () => {
            getEven(input);
        }
        const resultII = () => {
            getEven(inputII);
        }

        //act and assert
        expect(result).toThrowError(Error);
        expect(resultII).toThrowError(Error);
    });
});


// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
