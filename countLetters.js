const countLetters = function(input) {
  const results = {};

  for (const item of input) {
    if (item !== ' ') {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }

  return results;
}

module.exports = countLetters;

