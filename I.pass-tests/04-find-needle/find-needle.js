const findTheNeedle = (words, query) => {
    if (!Array.isArray(words)) throw new Error("Error");
    return (words.indexOf(query));
};

module.exports = {
    findTheNeedle
};
