const secondLargest = (numbers) => {
    numbers.sort((a, b) => b - a)
    return numbers[1]
}

module.exports = secondLargest;
