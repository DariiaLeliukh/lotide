const assertEqual = function(actual, expected) {
  return actual === expected;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let areEqual = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (object2.hasOwnProperty(key)) {

        if (Array.isArray(object1[key])) {
          if (!eqObjects(object1[key], object2[key])) {
            areEqual = false;
          }
        } else {
          if (!assertEqual(object1[key], object2[key])) {
            areEqual = false;
          }
        }
      } else areEqual = false;
    }
  } else areEqual = false;

  return areEqual;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`${(eqObjects(actual, expected)) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${inspect(actual)} ${(eqObjects(actual, expected)) ? " === " : " !== "} ${inspect(expected)}`);
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject); // => false

const longSleeveRedObject = { color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveRedObject); // => false