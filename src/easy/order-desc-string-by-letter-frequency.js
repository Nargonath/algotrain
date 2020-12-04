'use strict';

module.exports = function(string) {
  const byLetter = new Map();

  for (let char of string.split('')) {
    let currentLetterCount = byLetter.get(char) || 0;
    byLetter.set(char, ++currentLetterCount);
  }

  if (byLetter.size === 1) {
    return string;
  }

  let result = '';
  const entries = byLetter.entries();
  const sortedEntries = Array.from(entries).sort((a, b) => b[1] - a[1]);

  for (let [char, count] of sortedEntries) {
    for (let currentCount = 0; currentCount < count; currentCount++) {
      result += char;
    }
  }

  return result;
};
