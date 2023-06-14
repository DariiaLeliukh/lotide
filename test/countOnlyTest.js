const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly\n firstNames = \[\"Karl,\"Salima\",\"Agouhanna\",\"Fang\",\"Kavith\",\"Jason\",\"Salima\",\"Fang\",\"Joe\"]\n items to count: { \"Jason\": true, \"Karima\": true, \"Fang\": true, \"Agouhanna\": false }", () => {
  it("returns 1 for Jason in array ", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result.Jason, 1);
  });
  it("returns undefined for Karima in array ", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result.Karima, undefined);
  });

});