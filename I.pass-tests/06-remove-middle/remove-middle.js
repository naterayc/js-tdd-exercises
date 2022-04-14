const removeWord = (words) => {
    let index = words.indexOf('queen')
    let deleted = words.slice(index, index + 1)
    words.splice(index, 1)
    return deleted
}
module.exports = removeWord;