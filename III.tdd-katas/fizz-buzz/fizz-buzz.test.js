const { fizzbuzz } = require("./fizz-buzz");

describe('given the fizzbuzz function', () => {
  it("for the input 1 it should return 1", () => {
    ///arrange 
    const input = 1
    const expected = "1"
    //act
    const result = fizzbuzz(input);
    //assert
    expect(result).toEqual(expected);
  });
  it("for the input 2 it should return 1,2", () => {
    //arrange
    const input = 2
    const expected = "1, 2"
    //act
    const result = fizzbuzz(input);
    //assert
    expect(result).toEqual(expected);
  });
  it("for the input 3 it should return 1, 2, Fizz", () => {
    //arrange and act
    const result = fizzbuzz(3);
    //assert
    expect(result).toEqual("1, 2, Fizz");
  });
  it("for the input 5 it should return 1, 2, Fizz, 4, Buzz", () => {
    //arrange and act
    const result = fizzbuzz(5);
    //assert
    expect(result).toEqual("1, 2, Fizz, 4, Buzz");
  });
  it("for the input 6 it should return 1, 2, Fizz, 4, Buzz, Fizz", () => {
    //arrange and act
    const result = fizzbuzz(6);
    //assert
    expect(result).toEqual("1, 2, Fizz, 4, Buzz, Fizz");
  });
  it("for the input 16 it should return 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16", () => {
    //arrange and act
    const result = fizzbuzz(16);
    //assert
    expect(result).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16");
  });
  it("for the input 54 it should return the following output", () => {
    //arrange and act
    const output = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, Fizz, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, Fizz, Fizz, Fizz, Fizz, FizzBuzz, Fizz, Fizz, Fizz, Fizz, Buzz, 41, Fizz, Fizz, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Buzz, Buzz, FizzBuzz, Buzz"
    const result = fizzbuzz(54);
    //assert
    expect(result).toEqual(output);
  });
});