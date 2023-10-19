function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

/**
 * preorder traverse
 * @param {TreeNode} root 
 * @returns 
 */
function pre_order_traverse(root) {
    if(!root) return
    console.log(root.val)
    pre_order_traverse(root.lefet)
    pre_order_traverse(root.right)
}

/**
 * inorder traverse
 * @param {TreeNode} root 
 * @returns 
 */
function in_order_traverse(root) {
    if(!root) return
    in_order_traverse(root.left)
    console.log(root.val);
    in_order_traverse(root.right)
}

/**
 * post traverse
 * @param {TreeNode} root 
 * @returns 
 */
function post_order_traverse(root) {
    if(!root) return
    post_order_traverse(root.left)
    post_order_traverse(root.right)
    console.log(root.val)
}