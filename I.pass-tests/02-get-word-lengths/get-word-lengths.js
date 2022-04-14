var getWordLengths = function(someWords) {
    let lengths = []
    someWords.forEach(element => {
        lengths.push(element.length)
    });
    return lengths
};

module.exports = getWordLengths;
