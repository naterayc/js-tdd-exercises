const calculator = (input) => {
    if (input.length < 1) return 0;
    else if (input.length === 1) return parseInt(input);
    const numbers = input.match(/-?\d+/g);
    return numbers.reduce((a, b) => {
        if (Math.sign(b) === -1) {
            throw new Error('Negatives are not allowed: ' + numbers.filter(num => Math.sign(num) === -1));
        }
        if (b > 1000) {
            return parseInt(a);
        } else {
            return parseInt(a) + parseInt(b);
        }
    }, 0);
};

module.exports = {
    calculator
};