const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for assertEqual(\"Bootcamp\", \"Bootcamp\")", () => {
    assert.strictEqual(assertEqual("Bootcamp", "Bootcamp"), true);
  });

  it("returns false for assertEqual(\"Lighthouse Labs\", \"Bootcamp\")", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

  it("returns true for assertEqual(1, 1)", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });

  it("returns false for assertEqual(1, 2)", () => {
    assert.strictEqual(assertEqual(1, 2), false);
  });

});