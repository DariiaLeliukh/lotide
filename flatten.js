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


flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten([1, "string", [3, 4], 5, [6]]); // => [1, "string", 3, 4, 5, 6]


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //true
assertArraysEqual(flatten([[1, "string"], [3, 4], 5, 6]), [1, "string", 3, 4, 5, 6]); //true
assertArraysEqual(flatten([1, "string", 9, 4, 5, 6]), [1, "string", 3, 4, 5, 6]); //false
