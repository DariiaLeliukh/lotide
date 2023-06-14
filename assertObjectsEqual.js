const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`${(eqObjects(actual, expected)) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${inspect(actual)} ${(eqObjects(actual, expected)) ? " === " : " !== "} ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;