const { formatCities } = require("./cities");

describe('given the formatCities function', () => {
  it('for the input city: "Paris", country: "France", using the transform function it will return "Paris is the capital of France"', () => {
    //arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];

    function transform({ city, country }) {
      return `${city} is the capital of ${country}`;
    }

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy"
    ];

    //act
    const result = formatCities(capitals, transform);

    //assert
    expect(result).toEqual(expected);
  });
});
