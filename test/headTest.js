//const assertEqual = require('../assertEqual');
//const head = require('../head');

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head([5]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), "Hello");

const head = require('../head');
const assert = require('chai').assert;


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 5 for head([5, 6, 7])", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns \"Hello\" for head([\"Hello\", \"Lighthouse\", \"Labs\"])", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("should fail to retrieve \"Hello\" for empty array head([])", () => {
    assert.notStrictEqual(head([]), "Hello");
  });
  it("should give undefined for empty array head([])", () => {
    assert.strictEqual(head([]), undefined);
  });

});