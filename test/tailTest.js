const tail = require('../tail');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [] for tail([\"Hello\"])", () => {
    const result = tail(["Hello"]);
    expect(result).to.be.an("array").that.is.empty;
  });

  it("returns [] for tail([])", () => {
    const result = tail([]);
    expect(result).to.be.an("array").that.is.empty;
  });

  it("returns 2 for length of tail([\"Hello\", \"Lighthouse\", \"Labs\"])", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("returns \"Lighthouse\" for result[0] of tail([\"Hello\", \"Lighthouse\", \"Labs\"])", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("returns \"Labs\" for result[1] of tail([\"Hello\", \"Lighthouse\", \"Labs\"])", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });

});