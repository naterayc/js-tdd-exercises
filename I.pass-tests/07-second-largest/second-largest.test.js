const { secondLargest } = require("./second-largest");

describe('given de secondLargest function', () => {
  it('return the second largest number of the input', () => {
    //arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];

    //act
    const result = secondLargest(numbers);
    
    //assert
    expect(result).toEqual(57);
  });

  it('for the input "1, 6, 8, 25" it will throw an error', () => {
    //arrange
    const numbers = "1, 6, 8, 25";
    const result = () => secondLargest(numbers);

    //act and assert
    expect(result).toThrow(Error);
  })
});
