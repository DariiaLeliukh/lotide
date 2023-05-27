const assertEqual = function(actual, expected) {
  console.log(`${(actual === expected) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${actual} ${(actual === expected) ? " === " : " !== "} ${expected}`);
};

const countLetters = function(input) {
  const results = {};

  for (const item of input) {
    if (item !== ' ') {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }

  return results;
}
console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));

