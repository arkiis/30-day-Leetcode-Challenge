/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = {};

  for (let char of s) {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }

  for (let cha of s) {
    if (hash[cha] == 1) {
      return s.indexOf(cha);
    }
  }
  return -1;
};
