const { getWordLengths } = require("./get-word-lengths");

describe('given the wordLengths function', () => {
  it('for the input ["sun", "potato", "roundabout", "pizza"] it will return the lenghts of the words', () => {
    //arrange
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    //act
    const result = getWordLengths(words);

    //assert
    expect(result).toEqual(expected)
  })
})
