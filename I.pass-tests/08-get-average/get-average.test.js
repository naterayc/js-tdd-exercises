var { numbersAverage } = require("./get-average");

describe('given numbersAverage function', () => {
  it('return the average of numbers in the input', () => {
    //arrange
    var numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    var expected = 5;

    //act
    var result = numbersAverage(numbers);
    
    //assert
    expect(result).toEqual(expected);
  });
});
