module.exports = function(numbers) {
    let result = []
    numbers.forEach(element => {
        result.push(element + 1)
    });
    return result
};
