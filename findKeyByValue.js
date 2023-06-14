const findKeyByValue = (tvShows, tvShowItem) => {
  for (const key in tvShows) {
    if (tvShows[key] === tvShowItem) {
      return key;
    }
  }
};

module.exports = findKeyByValue;