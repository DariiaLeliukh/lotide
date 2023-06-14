const findKey = (tvShows, callback) => {
  for (const key in tvShows) {
    if (callback(tvShows[key])) {
      return key;
    }
  }
}

module.exports = findKey;