# https://leetcode.com/problems/invert-binary-tree/

# Invert a binary tree.

def invert_tree(root)
  nil if root == nil
  temp_root = root.right
  root.right = invert_tree(root.left)
  root.left = invert_tree(temp_root)
  root
end
