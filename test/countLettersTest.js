const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns 2 for letter L in countLetters('LHL')", () => {
    const result = countLetters('LHL');
    assert.strictEqual(result.L, 2);
  });
  it("returns 4 for letter h in countLetters('lighthouse in the house')", () => {
    const result = countLetters('lighthouse in the house');
    assert.strictEqual(result.h, 4);
  });

  it("returns undefined for letter k in countLetters('LHL')", () => {
    const result = countLetters('LHL');
    assert.strictEqual(result.k, undefined);
  });

});

