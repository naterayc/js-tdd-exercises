const {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString
} = require("./es6");

describe('given the arrow function', () => {
  it('should be instance of a function', () => {
    expect(arrow).toBeInstanceOf(Function);
  });

  it('should returns a string of es6 is awesome', () => {
    expect(arrow()).toEqual("es6 is awesome!");
  });
});

describe('given the defaultParameter function', () => {
  it('should return sam if no name argument passed in', () => {
    expect(defaultParameter()).toEqual("sam");
  });

  it('should return name if name argument is passed in', () => {
    expect(defaultParameter("samatar")).toEqual("samatar");
  });
});

describe('given the combineArrays function', () => {
  it('should return a combination of the arrays given in the input', () => {
    //arrange 
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    //act assert
    expect(combineArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('given the destructuring function', () => {
  it('should return cyf property of object', () => {
    //arrange
    const testObj = {
      cyf: "awesome",
      test: "100%",
      learning: "always"
    };
    //act assert
    expect(destructuring(testObj)).toEqual("awesome");
  });
});

describe('given the templateString function', () => {
  it('should return a string with the sum of parameter a and b', () => {
    expect(templateString(1, 2)).toEqual("The sum is equal to 3");
  });
});
