const flatten = function(array) {
  let flattenArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let k = 0; k < array[i].length; k++) {
        flattenArray.push(array[i][k]);
      }
    } else flattenArray.push(array[i]);
  }
  return flattenArray;
};

module.exports = flatten;

