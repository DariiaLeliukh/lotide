// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(`${(actual === expected) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${actual} ${(actual === expected) ? " === " : " !== "} ${expected}`);
};

const head = function(array) {
  return array[0];
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");