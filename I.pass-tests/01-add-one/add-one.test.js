const { addOne } = require("./add-one.js");

describe('given the add-one function', () => {
 it('fot the input [31, 57, 12, 5] it will return [32, 58, 13, 6] when the function is called', () => {
  //arrange
  const myArray = [31, 57, 12, 5];
  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];

  //act
  const result = addOne(myArray);

  //assert
  expect(result).toEqual(expected);
  expect(myArray).toEqual(unchanged);
 }); 
 it('for the input ["25"] it will return null', () => {
    //arrange
  const myArray = ["25"];
  const unchanged = ["25"];
  const expected = [undefined];

  //act
  const result = addOne(myArray);

  //assert
  expect(result).toEqual(expected);
  expect(myArray).toEqual(unchanged);
 })
});
