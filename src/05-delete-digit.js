/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  const digits = String(n).split('');
  for (let i = 0; i < digits.length; i++) {
    const arr = digits.slice();
    arr.splice(i, 1);
    result.push(+(arr.join('')));
  }
  return Math.max(...result);
}

module.exports = deleteDigit;
