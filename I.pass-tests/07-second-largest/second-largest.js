const secondLargest = (numbers) => {
    if (!Array.isArray(numbers)) throw new Error("Error");
    numbers.sort((a, b) => b - a)
    return numbers[1]
}

module.exports = {
    secondLargest
};
