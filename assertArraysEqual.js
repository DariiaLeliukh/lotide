// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected;
};
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

const assertArraysEqual = function(array1, array2) {
  console.log(`${(eqArrays(array1, array2)) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${array1} ${(eqArrays(array1, array2)) ? " === " : " !== "} ${array2}`);
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], ["3", 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false