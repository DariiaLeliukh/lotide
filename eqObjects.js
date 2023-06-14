const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

// Returns true if both objects have identical keys with identical values.
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

module.exports = eqObjects;