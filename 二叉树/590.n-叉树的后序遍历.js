/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (76.06%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    62.4K
 * Total Submissions: 82K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的 后序遍历 。
 * 
 * N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 递归法很简单，你可以使用迭代法完成此题吗?
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [1,null,3,2,4,null,5,6]
 * 输出：[5,6,3,2,4,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：root =
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * 输出：[2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * N 叉树的高度小于或等于 1000
 * 节点总数在范围 [0, 10^4] 内
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    res.unshift(node.val);
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
  }
  return res;
};
// @lc code=end

