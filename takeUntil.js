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

const takeUntil = function(array, callback) {
  //another way of doing so without forEach loop
  const cleanArray = array.slice(0, array.findIndex(callback));

  //with push to new array with forEach loop
  /* const cleanArray = [];
  array.slice(0, array.findIndex(callback)).forEach(item => {
    cleanArray.push(item);
  }); */

  //another way with for loop
  /* for (let item of array) {
    if (callback(item)) {
      break;
    }
    cleanArray.push(item);
  } */
  return cleanArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); //pass

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]); // pass

console.log('---');

const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data3, x => x === 'Redwood'), ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to"]);