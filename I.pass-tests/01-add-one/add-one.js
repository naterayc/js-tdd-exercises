const addOne = (numbers) => {
    let result = [];
    if (!Array.isArray(numbers)) throw new Error("Error");
    numbers.forEach(element => {
        if (typeof (element) === 'number') result.push(element + 1);
        else throw new Error("Error");
    });
    return result;
};

module.exports = {
    addOne
};