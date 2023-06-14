const without = require('../without');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("#without", () => {
  it("returns [2, 3] for without([1, 2, 3], [1])", () => {
    assert.sameOrderedMembers(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1'] for without(['1', 2, '3'], [1, 2, '3'])", () => {
    assert.sameOrderedMembers(without(["1", 2, "3"], [1, 2, "3"]), ["1"]);
  });

  it("returns ['1', '2'] for without(['1', '2', '3'], [1, 2, '3'])", () => {
    assert.sameOrderedMembers(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });

  it("returns [ '1', '5'] for without(['1', '5', '3'], [1, 2, '3'])", () => {
    assert.sameOrderedMembers(without(['1', '5', '3'], [1, 2, '3']), ['1', '5']);
  });

  it("returns [] for without([1, 2, 3], [1, 2, 3])", () => {
    expect(without([1, 2, 3], [1, 2, 3])).to.be.an("array").that.is.empty;
  });

});