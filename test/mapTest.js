const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for map(['ground', 'control', 'to', 'major', 'tom'], word => word[0])", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const results1 = map(words, word => word[0]);
    assert.sameOrderedMembers(results1, ['g', 'c', 't', 'm', 't']);
  });

  it("does not return ['g', 'c', 'k', 'm', 't'] for map(['ground', 'control', 'to', 'major', 'tom'], word => word[0])", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const results1 = map(words, word => word[0]);
    assert.notSameOrderedMembers(results1, ['g', 'c', 'k', 'm', 't']);
  });

  it("does not return ['g', 'c', 't', 'p', 'm', 't'] for map(['ground', 'control', 'to', 'major', 'tom'], word => word[0])", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const results1 = map(words, word => word[0]);
    assert.notSameOrderedMembers(results1, ['g', 'c', 't', 'p', 'm', 't']);
  });

});