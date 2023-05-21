// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected;
};
const eqArrays = function(array1, array2) {
  let areNotEqual = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (!assertEqual(array1[i], array2[i])) {
        areNotEqual = false;
      }
    }
  }
  console.log(areNotEqual);
}

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays([1, 2, 3], ["3", 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false