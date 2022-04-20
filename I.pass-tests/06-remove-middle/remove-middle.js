const removeMiddle = (words) => {
    let index = words.length/2;
    Number.isInteger(index) ? index = index : index = Math.round(index) -1;
    let deleted = words.slice(index, index + 1);
    words.splice(index, 1);
    return deleted;
}

module.exports = {
    removeMiddle
};
