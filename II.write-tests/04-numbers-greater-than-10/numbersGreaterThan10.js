const largerThanTen = (array) => {
  if(!Array.isArray(array) || array.length === 0) throw new Error("Error");
  return array.filter(number => {
    if(typeof(number) === 'number') return number > 10;
    else throw new Error("Error");
  });
};

module.exports = {
  largerThanTen
};