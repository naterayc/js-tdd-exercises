const { removeVowels } = require('./remove-vowels');

describe('given the removeVowels function', () => {
  it('for the input samuel it should return s_m__l', () => {
    // Arrange
    const expected = 's_m__l';
    // Act
    const result = removeVowels('samuel');
    // Assert
    expect(result).toEqual(expected);
  });

  it('for the input Ernesto it should return _rn_st_', () => {
    // Arrange
    const expected = '_rn_st_';
    // Act
    const result = removeVowels('Ernesto');
    // Assert
    expect(result).toEqual(expected);
  });
});
