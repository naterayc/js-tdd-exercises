const { addNumbers } = require("./add-numbers");

describe('given the addNumbers function', () => {
  it('for the input [9, 23, 10, 3, 8] it will return 53 when the function is called', () => {
    //arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;

    //act
    const result = addNumbers(numbers);

    //assert
    expect(result).toEqual(expected);
  })
})
