const { factorial } = require("./factorial");

describe('given the factorial function', () => {
  describe('for the following inputs, it will return its factorial', () => {
    it('for the input 5 it will return 120', () => {
      //arrange
      const in1 = 5;
      const exp1 = 120;
      //act
      const out1 = factorial(in1);
      //assert
      expect(out1).toEqual(exp1);
    });
    it('for the input 9 it will return 362880', () => {
      //arrange
      const in2 = 9;
      const exp2 = 362880;
      //act
      const out2 = factorial(in2);
      //assert
      expect(out2).toEqual(exp2);
    });
    it('for the input 1 it will return 1', () => {
      //arrange
      const in3 = 1;
      const exp3 = 1;
      //act
      const out3 = factorial(in3);
      //assert
      expect(out3).toEqual(exp3);
    });
    it('for the input 0 it will return 1', () => {
      //arrange
      const in4 = 0;
      const exp4 = 1;
      //act
      const out4 = factorial(in4);
      //assert
      expect(out4).toEqual(exp4);
    });
    it('for the input 3 it will return 6', () => {
      //arrange
      const in5 = 3;
      const exp5 = 6;
      //act
      const out5 = factorial(in5);
      //assert
      expect(out5).toEqual(exp5);
    });
  });
  describe('for an invalid input it will return undefined', () => {
    it('for the input "lala" it will return undefined', () => {
      //arrange
      const in6 = 'lala';
      const exp6 = undefined;
      //act
      const out6 = factorial(in6);
      //assert
      expect(out6).toEqual(exp6);
    });
  });
});
