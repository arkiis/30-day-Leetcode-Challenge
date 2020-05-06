var majorityElement = function (nums) {
  let hash = {};

  for (let num of nums) {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }

  for (let key in hash) {
    if (hash[key] > nums.length / 2) {
      return key;
    }
  }
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
