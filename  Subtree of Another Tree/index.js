/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

 //Time: O(m n) m in no of nodes in s and n is no of nodes in t
 //Space: O(h_s) where h_s is the height of the main tree.
const isSubtree = function (s, t) {
    if (!s) return !t;
     return helper(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

const helper = function(tree1, tree2) {
	if (!tree1 && !tree2) return true;
	if (!tree1 || !tree2) return false;
	if (tree1.val !== tree2.val) return false;
	let left = helper(tree1.left, tree2.left);
	let right = helper(tree1.right, tree2.right);
	return left && right;
}

// return JSON.stringify(s).indexOf(JSON.stringify(t))!==-1