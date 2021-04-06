/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let long = [];
  let short = [];
  if (s1.length > s2.length) {
    long = s1.split('');
    short = s2.split('');
  } else {
    long = s2.split('');
    short = s1.split('');
  }
  for (let i = 0; i < long.length; i++) {
    if (short.indexOf(long[i]) > -1) {
      result++;
      short.splice(short.indexOf(long[i]), 1);
      long.splice(i, 1);
      i--;
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
