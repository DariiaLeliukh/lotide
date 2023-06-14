const flatten = require('../flatten')
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for flatten([1, 2, [3, 4], 5, [6]])", () => {
    assert.sameOrderedMembers(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, \"string\", 3, 4, 5, 6] for flatten([[1, \"string\"], [3, 4], 5, 6])", () => {
    assert.sameOrderedMembers(flatten([[1, "string"], [3, 4], 5, 6]), [1, "string", 3, 4, 5, 6]);
  });

  it("does not return [1, \"string\", 3, 4, 5, 6] for flatten([1, \"string\", 9, 4, 5, 6])", () => {
    assert.notSameOrderedMembers(flatten([1, "string", 9, 4, 5, 6]), [1, "string", 3, 4, 5, 6]);
  });
});
