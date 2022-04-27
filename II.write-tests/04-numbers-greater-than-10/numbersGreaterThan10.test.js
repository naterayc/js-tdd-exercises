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

    it('for the input "22, 5, 2" it should throw an error', () => {
        //arrange
        const numbers = "22, 5, 2";
        const result = () => {
            largerThanTen(numbers);
        }

        //act and assert
        expect(result).toThrowError('Error')
    });
    
    it('for the input ["word", "22", 5] it should throw an error', () => {
        //arrange
        const numbers = ['word', '22', 5];
        const result = () => {
            largerThanTen(numbers);
        }

        //act and assert
        expect(result).toThrowError('Error')
    });

    it('for the input [] it should return []', () => {
        //arrange
        const numbers = [];

        //act
        const result = largerThanTen(numbers);
        
        //assert
        expect(result).toEqual(numbers);
    });

    it('for the input [1, 2, 3] it should return []', () => {
        //arrange
        const numbers = [1, 2, 3];
        const output = [];

        //act
        const result = largerThanTen(numbers);
        

        //act and assert
        expect(result).toEqual(output);
    });
});
