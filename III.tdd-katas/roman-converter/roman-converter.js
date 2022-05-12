const convertToOldRoman = (arabic) => {
    let romanOutput = '', relative;
    const oldRomanMatrix = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

    for (let i in oldRomanMatrix) {
        relative = Math.floor(arabic / oldRomanMatrix[i]);
        arabic -= relative * oldRomanMatrix[i];
        romanOutput += i.repeat(relative);
    }

    return romanOutput;
}

const convertToNewRoman = (arabic) => {
    let romanOutput = '', relative;
    const oldRomanMatrix = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    for (let i in oldRomanMatrix) {
        relative = Math.floor(arabic / oldRomanMatrix[i]);
        arabic -= relative * oldRomanMatrix[i];
        romanOutput += i.repeat(relative);
    }

    return romanOutput;
};

module.exports = {
    convertToOldRoman,
    convertToNewRoman
}