const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for eqObjects({ color: 'red', size: 'medium' }, { size: 'medium', color: 'red' })", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true)
  });

  it("returns false for eqObjects({ color: 'red', size: 'medium' }, { size: 'medium', color: 'red', sleeveLength: 'long' })", () => {
    const shirtObject = { color: 'red', size: 'medium' };
    const longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' };
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false)
  });

  it("returns true for eqObjects({ colors: ['red', 'blue'], size: 'medium' }, { size: 'medium', colors: ['red', 'blue'] })", () => {
    const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
    const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] };
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true)
  });

  it("returns false for eqObjects({ colors: ['red', 'blue'], size: 'medium' }, { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' })", () => {
    const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
    const longSleeveMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' };
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false)
  });

});