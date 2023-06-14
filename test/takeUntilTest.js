const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.sameOrderedMembers(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("returns ['I've', 'been', 'to', 'Hollywood'] for takeUntil(['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'], x => x === ',')", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.sameOrderedMembers(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });

  it("returns ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to'] for takeUntil(['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'], x => x === ',')", () => {
    const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.sameOrderedMembers(takeUntil(data3, x => x === 'Redwood'), ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to"]);
  });

});