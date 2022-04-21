const { removeVowels } = require("../02-remove-vowels/remove-vowels");
const isArray = true;
const removeVowelsForWords = (words) => {
  const result = words.map((word) => {
    if(typeof(word) != 'string') throw new Error("Error");
    else return removeVowels(word, isArray);
  });

  return result;
}

module.exports = {
  removeVowelsForWords
};

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
