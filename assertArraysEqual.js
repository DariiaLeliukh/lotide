const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  console.log(`${(eqArrays(array1, array2)) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${array1} ${(eqArrays(array1, array2)) ? " === " : " !== "} ${array2}`);
};

module.exports = assertArraysEqual;