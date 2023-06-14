const takeUntil = function(array, callback) {
  const cleanArray = array.slice(0, array.findIndex(callback));
  return cleanArray;
}

module.exports = takeUntil;