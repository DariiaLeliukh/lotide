const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns [0] for letterPositions('hello').h", () => {
    assert.sameOrderedMembers(letterPositions("hello").h, [0]);
  });

  it("returns [1] for letterPositions('hello').e", () => {
    assert.sameOrderedMembers(letterPositions("hello").e, [1]);
  });

  it("returns [2, 3] for letterPositions('hello').l", () => {
    assert.sameOrderedMembers(letterPositions("hello").l, [2, 3]);
  });

  it("returns [3, 5, 15, 18] for letterPositions('hello').h", () => {
    assert.sameOrderedMembers(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});
