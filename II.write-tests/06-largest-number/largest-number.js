const getLargestNumber = (array) => {
  const notNumber = (num) => typeof(num) !== 'number';
  if(!Array.isArray(array)) throw new Error('Error');
  if(array.some(notNumber)) throw new Error('Not number')
  return Math.max(...array);
}

module.exports = {
  getLargestNumber
};
