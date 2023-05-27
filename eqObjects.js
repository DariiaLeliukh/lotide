const assertEqual = function(actual, expected) {
  return actual === expected;
};

const assertEqualOutput = function(actual, expected) {
  console.log(`${(actual === expected) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${actual} ${(actual === expected) ? " === " : " !== "} ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let areEqual = true;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (object2.hasOwnProperty(key)) {

        if (Array.isArray(object1[key])) {
          if (!eqArrays(object1[key], object2[key])) {
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


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqualOutput(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqualOutput(eqObjects(shirtObject, longSleeveShirtObject), false); // => false


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqualOutput(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqualOutput(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false