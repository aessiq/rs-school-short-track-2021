/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const array = [];
  let counter = {};
  const domainsCopy = domains.splice(0, domains.length);
  for (let i = 0; i < domainsCopy.length; i++) {
    domainsCopy[i] = `.${domainsCopy[i]}`;
    for (let j = 0; j < domainsCopy[i].length; j++) {
      if (domainsCopy[i][j] === '.') {
        array.push(domainsCopy[i].split('').splice(j, domainsCopy[i].length - j).join(''));
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] in counter) counter[array[i]]++;
    else counter[array[i]] = 1;
  }
  const counterTransformed = Object.entries(counter);
  function addDots(arr) {
    const arrCopy = arr.slice(0, arr.length);
    for (let i = 0; i < arrCopy.length; i++) {
      arrCopy[i] = `.${arrCopy[i]}`;
    }
    return arrCopy;
  }
  for (let i = 0; i < counterTransformed.length; i++) {
    counterTransformed[i][0] = addDots(counterTransformed[i][0].split('.').reverse()).join('');
    counterTransformed[i][0] = counterTransformed[i][0].split('').splice(0, counterTransformed[i][0].split('').length - 1).join('');
  }
  counter = Object.fromEntries(counterTransformed);
  return counter;
}

module.exports = getDNSStats;
