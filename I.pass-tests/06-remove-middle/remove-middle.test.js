const { removeMiddle } = require("./remove-middle");

describe('given the removeMiddle function', () => {
  it('for the following input it will return, the original array without the middle word and the word removed', () => {
    //arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];
    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];

    //act
    const result = removeMiddle(words);
    
    //assert
    expect(result).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });
});
