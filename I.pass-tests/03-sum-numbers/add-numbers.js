function addNumbers(numbers) {
    if (!Array.isArray(numbers)) throw new Error("Error");
    return (numbers.reduce((a, b) => a + b));
};

module.exports = { 
    addNumbers 
};
