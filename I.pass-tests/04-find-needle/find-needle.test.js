const { findTheNeedle } = require("./find-needle");

describe('given the findTheNeedle function', () => {
  it('for the input ["house", "train", "slide", "needle", "book"] it will return the position of "needle" in the array', () => {
    //arrange
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    //act
    const result = findTheNeedle(words, "needle");

    //assert
    expect(result).toEqual(expected);
  });

  it('for the input ["plant", "shelf", "arrow", "bird"] it will return the position of "plant" in the array', () => {
    //assert
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;

    //act
    const result = findTheNeedle(words, "plant");

    //assert
    expect(result).toEqual(expected);
  });

  it('for the input "plant, shelf, arrow, bird" it will throw an error', () => {
    //arrange
    const words = "plant, shelf, arrow, bird";
    const result = () => findTheNeedle(words, "plant");

    //act and assert
    expect(result).toThrow(Error);
  })
});
