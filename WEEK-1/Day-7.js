/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  //BFS -- same level order traversal using queue
  let map = {},
    q = [];
  q.push(root);
  map[root.val] = { parent: null, level: 0 };

  while (q.length) {
    let node = q.shift();

    if (node.left) {
      map[node.left.val] = { parent: node.val, level: map[node.val].level + 1 };
      q.push(node.left);
    }

    if (node.right) {
      map[node.right.val] = {
        parent: node.val,
        level: map[node.val].level + 1,
      };
      q.push(node.right);
    }
  }

  return map[x].parent !== map[y].parent && map[x].level === map[y].level;
};
//Time: O(N) Space: O(1)
