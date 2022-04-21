const { removeVowelsForWords } = require('./remove-vowels-in-array')

describe('given the removeVowelsForWords function', () => {
  it('for the input ["Irina", "Etza", "Daniel, José"] it should return ["rn", "tz", "Dnl, Js"]', () => {
    // Arrange
    const input = ["Irina", "Etza", "Daniel, José"];
    const output = ["rn", "tz", "Dnl, Js"];

    // Act
    const result = removeVowelsForWords(input);

    // Assert
    expect(result).toEqual(output);
  });

  it('for the input [25, "Jose", "Ana", "541"] it should throw an error', () => {
    //arrange
    const input = [25, 'Jose', 'Ana', '541'];
    const result = () => {
      removeVowelsForWords(input);
    } 
    //act and assert
    expect(result).toThrowError('Error');
  });
});
