const middle = function(array) {
  let middleArray = [];

  if (array.length > 2) {
    if (array.length % 2 === 1) {
      let position = (array.length - 1) / 2;
      middleArray.push(array[position]);
    } else {
      let position = array.length / 2;
      middleArray.push(array[position - 1], array[position]);
    }
  }
  return middleArray;
};

module.exports = middle;