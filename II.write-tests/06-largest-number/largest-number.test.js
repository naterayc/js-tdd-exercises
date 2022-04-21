var getLargestNumber = require('./largest-number');

test('get the largest number', () => {
    var numbers = [3, 21, 88, 4, 36];
    var output = 88;

    var result = getLargestNumber(numbers)

    expect(result).toEqual(output);
})

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
