const middle = require('../middle');
const expect = require('chai').expect;


describe("#middle", () => {
  it("returns [] for middle([1])", () => {
    //expect(middle([1])).to.eql([]);
    expect(middle([1])).to.be.an("array").that.is.empty;
  });

  it("returns [] for middle([1, 2])", () => {
    expect(middle([1, 2])).to.be.an("array").that.is.empty;
  });

  it("returns [2] for middle([1, 2, 3])", () => {
    expect(middle([1, 2, 3])).to.eql([2]);
  });

  it("returns [2, 3] for middle([1, 2, 3, 4])", () => {
    expect(middle([1, 2, 3, 4])).to.eql([2, 3]);
  });

  it("returns [3] for middle([1, 2, 3, 4, 5])", () => {
    expect(middle([1, 2, 3, 4, 5])).to.eql([3]);
  });

  it("returns [2, 3] for middle([1, 2, 3, 4])", () => {
    expect(middle([1, 2, 3, 4])).to.eql([2, 3]);
  });

  it("returns [3, 4] for middle([1, 2, 3, 4, 5, 6])", () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.eql([3, 4]);
  });

  it("returns [5] for middle([1, 2, 3, 4, 5, 6, 7, 8, 9])", () => {
    expect(middle([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.eql([5]);
  });

});