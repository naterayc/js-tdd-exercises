const addOne = (numbers) => {
    return numbers.map(element => {
        if (typeof (element) === 'number') return element + 1;
    });
};

module.exports = {
    addOne
};