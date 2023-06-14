const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;


describe("#findKeyByValue", () => {
  it("returns 'drama' for findKeyByValue({ \n sci_fi: \"The Expanse\", \n comedy: \"Brooklyn Nine-Nine\", \n drama: \"The Wire\" }, \n\"The Wire\")", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined when findKeyByValue is given non-existing value", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});