const largerThanTen = (array) => {
  if(!Array.isArray(array)) throw new Error("Error");
  else if(array.length === 0) return array;
  else {
    return array.filter(number => {
    if(typeof(number) === 'number') return number > 10;
    else throw new Error("Error");
  });
  }
  
};

module.exports = {
  largerThanTen
};