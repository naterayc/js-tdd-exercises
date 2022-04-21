const { largerThanTen } = require("./numbersGreaterThan10");

describe('given the largerThanTen function', () => {
    it('for the input [4, 10, 32, 9, 21] it should return [32, 21]', () => {
        //arrange
        const numbers = [4, 10, 32, 9, 21];
        const expected = [32, 21];

        //act
        const result = largerThanTen(numbers);

        //assert
        expect(result).toEqual(expected);
    });
    
    it('for the input ["word", "22", 5] it should throw an error', () => {
        //arrange
        const numbers = ['word', '22', 5];

        //act
        const result = () => {
            largerThanTen(numbers);
        }

        //assert
        expect(result).toThrowError('Error')
    })
    it('for the input [] it should throw an error', () => {
        //arrange
        const numbers = [];

        //act
        const result = () => {
            largerThanTen(numbers);
        }
        
        //assert
        expect(result).toThrowError('Error')
    })
});
