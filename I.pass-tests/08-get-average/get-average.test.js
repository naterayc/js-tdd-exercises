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

  it('for the input "1, 6, 8, 25" it will throw an error', () => {
    //arrange
    const numbers = "1, 6, 8, 25";
    const result = () => numbersAverage(numbers);

    //act and assert
    expect(result).toThrow(Error);
  })
});
