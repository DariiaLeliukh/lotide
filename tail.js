// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(`${(actual === expected) ? "✅✅✅ Assertion Passed: " : "🛑🛑🛑 Assertion Failed: "} ${actual} ${(actual === expected) ? " === " : " !== "} ${expected}`);
};

const tail = function(array) {
  return array.slice(1);
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail([]); //tail of empty array
console.log(result2);

const result3 = tail(["Hello"]); //tail of 1 element array
console.log(result3);