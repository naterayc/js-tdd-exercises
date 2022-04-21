const removeVowels = (word, isArray) => {
  const characters = word.split("");
  const result = [];
  const charactersRegex = new RegExp('([aeiou\u00E0-\u00FC])')
  characters.forEach((character) =>{
    if (
      charactersRegex.test(character.toLowerCase())
    ) {
      isArray ? result.push('') : result.push("_")
    }
    else {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = {
  removeVowels
};

/*
  Let's trace this piece of code - what is the value of result with this input

  const result = removeVowels('samuel');

  what is the value of result?
*/
