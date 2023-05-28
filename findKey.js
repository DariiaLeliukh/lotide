const assertEqual = function(actual, expected) {
  console.log(`${(actual === expected) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${actual} ${(actual === expected) ? " === " : " !== "} ${expected}`);
};

const findKey = (tvShows, callback) => {
  for (const key in tvShows) {
    if (callback(tvShows[key])) {
      return key;
    }
  }
}

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"



assertEqual(test1, "noma");
assertEqual(test1, "something");

const test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 5) // => "noma"

assertEqual(test2, undefined); //pass
assertEqual(test2, "something"); //fail
