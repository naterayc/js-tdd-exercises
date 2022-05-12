const { convertToOldRoman, convertToNewRoman } = require('./roman-converter.js');

describe('given the convertToOldRoman function', () => {
    it('for the arabic number 1 it should return I', () => {
        //arrange
        const input = 1;
        const expected = 'I';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });

    it('for the arabic number 2 it should return II', () => {
        //arrange
        const input = 2;
        const expected = 'II';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });

    it('for the arabic number 3 it should return III', () => {
        //arrange
        const input = 3;
        const expected = 'III';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });

    it('for the arabic number 4 it should return IIII', () => {
        //arrange
        const input = 4;
        const expected = 'IIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 5 it should return V', () => {
        //arrange
        const input = 5;
        const expected = 'V';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 6 it should return VI', () => {
        //arrange
        const input = 6;
        const expected = 'VI';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 7 it should return VII', () => {
        //arrange
        const input = 7;
        const expected = 'VII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 8 it should return VIII', () => {
        //arrange
        const input = 8;
        const expected = 'VIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 9 it should return VIIII', () => {
        //arrange
        const input = 9;
        const expected = 'VIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 10 it should return X', () => {
        //arrange
        const input = 10;
        const expected = 'X';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 11 it should return XI', () => {
        //arrange
        const input = 11;
        const expected = 'XI';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 12 it should return XII', () => {
        //arrange
        const input = 12;
        const expected = 'XII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 13 it should return XIII', () => {
        //arrange
        const input = 13;
        const expected = 'XIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 14 it should return XIIII', () => {
        //arrange
        const input = 14;
        const expected = 'XIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 15 it should return XV', () => {
        //arrange
        const input = 15;
        const expected = 'XV';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 16 it should return XVI', () => {
        //arrange
        const input = 16;
        const expected = 'XVI';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 17 it should return XVII', () => {
        //arrange
        const input = 17;
        const expected = 'XVII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 18 it should return XVIII', () => {
        //arrange
        const input = 18;
        const expected = 'XVIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 19 it should return XVIIII', () => {
        //arrange
        const input = 19;
        const expected = 'XVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 20 it should return XX', () => {
        //arrange
        const input = 20;
        const expected = 'XX';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 21 it should return XXI', () => {
        //arrange
        const input = 21;
        const expected = 'XXI';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 22 it should return XXII', () => {
        //arrange
        const input = 22;
        const expected = 'XXII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 23 it should return XXIII', () => {
        //arrange
        const input = 23;
        const expected = 'XXIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 24 it should return XXIIII', () => {
        //arrange
        const input = 24;
        const expected = 'XXIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 25 it should return XXV', () => {
        //arrange
        const input = 25;
        const expected = 'XXV';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 30 it should return XXX', () => {
        //arrange
        const input = 30;
        const expected = 'XXX';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 35 it should return XXXV', () => {
        //arrange
        const input = 35;
        const expected = 'XXXV';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 36 it should return XXXVI', () => {
        //arrange
        const input = 36;
        const expected = 'XXXVI';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 40 it should return XXXX', () => {
        //arrange
        const input = 40;
        const expected = 'XXXX';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 44 it should return XXXXIIII', () => {
        //arrange
        const input = 44;
        const expected = 'XXXXIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 45 it should return XXXXV', () => {
        //arrange
        const input = 45;
        const expected = 'XXXXV';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 49 it should return XXXXVIIII', () => {
        //arrange
        const input = 49;
        const expected = 'XXXXVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 50 it should return L', () => {
        //arrange
        const input = 50;
        const expected = 'L';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 51 it should return LI', () => {
        //arrange
        const input = 51;
        const expected = 'LI';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 55 it should return LV', () => {
        //arrange
        const input = 55;
        const expected = 'LV';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 59 it should return LVIIII', () => {
        //arrange
        const input = 59;
        const expected = 'LVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 60 it should return LX', () => {
        //arrange
        const input = 60;
        const expected = 'LX';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 64 it should return LXIIII', () => {
        //arrange
        const input = 64;
        const expected = 'LXIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 65 it should return LXV', () => {
        //arrange
        const input = 65;
        const expected = 'LXV';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 69 it should return LXVIIII', () => {
        //arrange
        const input = 69;
        const expected = 'LXVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 70 it should return LXX', () => {
        //arrange
        const input = 70;
        const expected = 'LXX';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 74 it should return LXXIIII', () => {
        //arrange
        const input = 74;
        const expected = 'LXXIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 75 it should return LXXV', () => {
        //arrange
        const input = 75;
        const expected = 'LXXV';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 79 it should return LXXVIIII', () => {
        //arrange
        const input = 79;
        const expected = 'LXXVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 90 it should return LXXXX', () => {
        //arrange
        const input = 90;
        const expected = 'LXXXX';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 99 it should return LXXXXVIIII', () => {
        //arrange
        const input = 99;
        const expected = 'LXXXXVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 100 it should return C', () => {
        //arrange
        const input = 100;
        const expected = 'C';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 100 it should return CVIIII', () => {
        //arrange
        const input = 109;
        const expected = 'CVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 140 it should return CXXXX', () => {
        //arrange
        const input = 140;
        const expected = 'CXXXX';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 199 it should return CLXXXXVIIII', () => {
        //arrange
        const input = 199;
        const expected = 'CLXXXXVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 200 it should return CC', () => {
        //arrange
        const input = 200;
        const expected = 'CC';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 2000 it should return MM', () => {
        //arrange
        const input = 2000;
        const expected = 'MM';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
    it('for the arabic number 999 it should return DCCCCLXXXXVIIII', () => {
        //arrange
        const input = 2999;
        const expected = 'DCCCCLXXXXVIIII';
        //act
        const result = convertToOldRoman(input);
        //assert
        expect(result).toBe(expected);
    });
});