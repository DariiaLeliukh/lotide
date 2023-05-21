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
}

// TEST CODE
without(["1", 2, "3"], [1, 2, "3"])
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "5", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", 2, "3"], [1, 2, "3"]), ["1", "2"]);