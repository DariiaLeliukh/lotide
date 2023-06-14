const assertEqual = require('./assertEqual');

const without = function(source, itemsToRemove) {
  let cleanArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (!assertEqual(source[i], itemsToRemove[i]) && cleanArray.indexOf(source[i]) === -1) {
        cleanArray.push(source[i]);
      }
    }
  }
  return cleanArray;
};

module.exports = without;