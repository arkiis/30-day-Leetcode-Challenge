//Maximum Sum Circular Subarray
//kadames algo
var maximumSum = function (A) {
  let maxSoFar = 0,
    globalMax = 0;

  let mergeArr = [...A];
  mergeArr.pop();

  A = A.concat(mergeArr);
  console.log(A);

  for (let i = 0; i < A.length; i++) {
    maxSoFar = Math.max(0, maxSoFar + A[i]);
    globalMax = Math.max(maxSoFar, globalMax);
  }

  return globalMax;
};
console.log(maximumSum([5, -3, 5])); // returns 6 : [4, -1, 2, 1]

var maxSubarrayCircle = function (A) {
  let tempMax = Number.MIN_SAFE_INTEGER,
    maxSum = Number.MIN_SAFE_INTEGER;
  let tempMin = Number.MAX_SAFE_INTEGER,
    minSum = Number.MAX_SAFE_INTEGER;

  let sum = 0;

  A.forEach((num) => {
    tempMax = Math.max(tempMax + num, num);
    maxSum = Math.max(maxSum, tempMax);
    tempMin = Math.min(tempMin + num, num);
    minSum = Math.min(minSum, tempMin);
    sum += num;
  });
  return maxSum > 0 ? Math.max(maxSum, sum - minSum) : maxSum;
};

console.log(maxSubarrayCircle([5, -3, 5]));
