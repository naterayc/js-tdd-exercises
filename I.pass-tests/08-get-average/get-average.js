// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
const numbersAverage = (numbers) => {
    if (!Array.isArray(numbers)) throw new Error("Error");
    let onlyNumbers = numbers.filter((element) => typeof element === 'number')
    return onlyNumbers.length
}

module.exports = {
    numbersAverage
};
