const { paintShop } = require("./paint-cars");

describe('given the paintShop function', () => {
  it('for the following input, it will return the cars to be repainted, without modifying the original input', () => {
    //arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    //act
    const output = paintShop(cars, "Pink");

    //assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });
});

