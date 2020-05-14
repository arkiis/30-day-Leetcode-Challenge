/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let first = coordinates.shift();
  let second = coordinates.shift();

  let slope = (second[1] - first[1]) / (second[0] - first[0]);
  const q = [first, second];

  let newSlope = slope;
  while (coordinates.length > 0) {
    let first = q[q.length - 1];
    let second = coordinates[0];
    newSlope = (second[1] - first[1]) / (second[0] - first[0]);
    if (newSlope != slope) return false;
    q.push(coordinates.shift());
  }
  console.log({ q });
  return true;
};
//comparing to see if cord pairs have the same slope
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
  ])
);
