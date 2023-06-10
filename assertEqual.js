// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(`${(actual === expected) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${actual} ${(actual === expected) ? " === " : " !== "} ${expected}`);
};

module.exports = assertEqual;