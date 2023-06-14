const findKey = require('../findKey');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("#findKey", () => {
  it("returns noma for findKey({ 'Blue Hill': { stars: 1 }, 'Akaleri': { stars: 3 }, 'noma': { stars: 2 },'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre': { stars: 3 } }, x => x.stars === 2)", () => {
    const test1 = findKey({
      'Blue Hill': { stars: 1 },
      'Akaleri': { stars: 3 },
      'noma': { stars: 2 },
      'elBulli': { stars: 3 },
      'Ora': { stars: 2 },
      'Akelarre': { stars: 3 }
    }, x => x.stars === 2);

    assert.strictEqual(test1, "noma");
  });

  it("returns undefined for findKey({ 'Blue Hill': { stars: 1 }, 'Akaleri': { stars: 3 }, 'noma': { stars: 2 },'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre': { stars: 3 } }, 'something' ", () => {
    try {
      findKey({
        'Blue Hill': { stars: 1 },
        'Akaleri': { stars: 3 },
        'noma': { stars: 2 },
        'elBulli': { stars: 3 },
        'Ora': { stars: 2 },
        'Akelarre': { stars: 3 }
      }, "something");
    } catch (e) {
      assert.equal(e, "TypeError: callback is not a function");

    }
  });

});