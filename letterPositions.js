// function letterPositions which will return all the indices (zero-based positions)
// in the string where each character is found.
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      const value = sentence[i];
      if (!(value in results)) {
        results[value] = [i];
      } else results[value].push(i);
    }
  }

  return results;
};

module.exports = letterPositions;