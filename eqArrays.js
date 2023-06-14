const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  let areEqual = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (!assertEqual(array1[i], array2[i])) {
        areEqual = false;
      }
    }
  } else areEqual = false;
  return areEqual;
};

module.exports = eqArrays;