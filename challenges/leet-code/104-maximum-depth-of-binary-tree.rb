# https://leetcode.com/problems/maximum-depth-of-binary-tree/

# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

root = new TreeNode(3)

root.left =
