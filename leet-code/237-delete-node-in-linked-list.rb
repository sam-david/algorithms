# https://leetcode.com/problems/delete-node-in-a-linked-list/
# Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

# Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.

class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def delete_node(node)
  node.val = node.next.val
  node.next = node.next.next
end

node1 = new ListNode(1)
node2 = new ListNode(2)
node3 = new ListNode(3)
node4 = new ListNode(4)
node1.next = node2
node2.next = node3
