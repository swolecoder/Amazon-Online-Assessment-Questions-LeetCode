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
 * @return {number}
 */
var maximumAverageSubtree = function (root) {

    function helper(root) {
        if (!root) return { sum: 0, count: 0, avg: 0 };

        let left = helper(root.left);
        let right = helper(root.right);

        let sum = left.sum + right.sum + root.val;
        let count = left.count + right.count + 1;

        let avg = Math.max(left.avg, right.avg, sum / count);

        return { sum, count, avg }
    }

    let { avg } = helper(root);

    return avg

};