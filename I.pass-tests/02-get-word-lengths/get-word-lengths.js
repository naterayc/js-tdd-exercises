const getWordLengths = (someWords) => {
    let lengths = [];
    if (!Array.isArray(someWords)) throw new Error("Error");
    someWords.forEach(element => {
        if (typeof (element) === 'string') lengths.push(element.length);
        else throw new Error("Error");
    });
    return lengths;
};

module.exports = { 
    getWordLengths 
};
