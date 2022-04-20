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
});
