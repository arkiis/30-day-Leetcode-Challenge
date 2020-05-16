/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let fill = image[sr][sc];
  let final = [...image];

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (
        (image[i][j] == fill && image[i + 1] && image[i + 1][j] == fill) ||
        (image[i][j] == fill && image[i - 1] && image[i - 1][j] == fill) ||
        (image[i][j] == fill && image[i][j + 1] && image[i][j + 1] == fill) ||
        (image[i][j] == fill && image[i][j - 1] && image[i][j - 1] == fill)
      ) {
        final[i][j] = newColor;
      }
      console.log(image[i][j]);
    }
  }
  console.log(image);
  return final;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

//DFS
var floodFil = function (image, sr, sc, newColor) {
  const currColor = image[sr][sc];
  if (newColor === currColor) return image;

  function callDFS(img, row, col) {
    if (
      row >= img.length ||
      row < 0 ||
      col >= img[0].length ||
      col < 0 ||
      img[row][col] !== currColor
    )
      return;
    img[row][col] = newColor;
    callDFS(img, row - 1, col); //up
    callDFS(img, row + 1, col); //down
    callDFS(img, row, col + 1); //right
    callDFS(img, row - 1, col - 1); //left
  }
  return callDFS(image, sr, sc);
};

var floodfillBFS = function (image, sr, sc, newColor) {
  const currColor = image[sr][sc];
  if (currColor === newColor) return image;
  const queue = [[sr, sc]];

  while (queue.length) {
    const [row, col] = queue.shift();
    if (image[row][col] === currColor) {
      image[row][col] = newColor;
      if (row - 1 >= 0) queue.push([row - 1, col]);
      if (row + 1 < image.length) queue.push([row + 1, col]); //down
      if (col + 1 < image[0].length) queue.push([row, col + 1]); //right
      if (col - 1 >= 0) queue.push([row, col - 1]); //left
    }
  }
  return image;
};
