var findJudge = function (N, trust) {
  let count = new Array(N + 1).fill(0);

  for (let arr of trust) {
    count[arr[0]]--;
    count[arr[1]]++;
  }
  console.log(count);
  for (let i = 1; i <= N; i++) {
    if (count[i] == N - 1) return i;
  }

  return -1;
};
