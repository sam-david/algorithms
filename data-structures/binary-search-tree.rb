
class Node
  attr_accessor :right_child, :left_child
  attr_reader :val
  def initialize(val)
    @val = val
    @right_child = nil
    @left_child = nil
  end
end

class BinarySearchTree
  attr_accessor :root, :size
  def initialize
    @root = nil
    @size = 0
  end

  def insert(val)
    if @root === nil
      @root = Node.new(val)
      @size += 1
    else
      find_and_insert(@root, val)
      @size += 1
    end
  end

  def find_and_insert(current_node, val)
    if val > current_node.val
      if current_node.right_child === nil
        current_node.right_child = Node.new(val)
      else
        find_and_insert(current_node.right_child, val)
      end
    elsif val < current_node.val
      if current_node.left_child === nil
        current_node.left_child = Node.new(val)
      else
        find_and_insert(current_node.left_child, val)
      end
    end
  end

  def search(target)
    traverse(@root, target) == true ? true : false
  end

  def traverse(current_node, target)
    if current_node.nil?
      return
    elsif current_node.val == target
      return true
    end

    if target > current_node.val
      traverse(current_node.right_child, target)
    elsif target < current_node.val
      traverse(current_node.left_child, target)
    end
  end

  def delete(val)
    current_vals = round_up(@root, val, Array.new)
    p "Delete value does not exist" if current_vals.length == @size

    @root = nil
    @size = 0

    current_vals.each do |val|
      insert(val)
    end
  end

  def round_up(current_node, delete_val, temp)
    return if current_node.nil?
    if current_node.val != delete_val
      temp.push(current_node.val)
    end

    round_up(current_node.right_child, delete_val, temp)
    round_up(current_node.left_child, delete_val, temp)
    return temp
  end
end

binary_search_tree = BinarySearchTree.new
binary_search_tree.insert(5)
binary_search_tree.insert(6)
binary_search_tree.insert(7)
# p binary_search_tree.search(5)
# p binary_search_tree.search(3)
p binary_search_tree.delete(5)
# p binary_search_tree.delete(8)
p binary_search_tree

















# //////////////////////////////////////////////////////////
# ///////////////  DO NOT TOUCH TEST BELOW!!!  /////////////
# //////////////////////////////////////////////////////////

# require 'test/unit'

# class BinarySearchTreeNodeTest < Test::Unit::TestCase
#   def test_creation_of_node
#     test = Node.new(5)

#     assert_not_equal(nil, test)
#   end
#   def test_encoding_a_value
#     test = Node.new(5)

#     assert_equal(5, test.val)
#     assert_equal(nil, test.right_child)
#     assert_equal(nil, test.left_child)
#   end
#   def test_inserting_other_values
#     test = Node.new(5)
#     testRight = Node.new(10)
#     testLeft = Node.new(2)
#     test.right_child = testRight
#     test.left_child = testLeft

#     assert_equal(5, test.root.val)
#     assert_equal(2, test.root.left_child.val)
#     assert_equal(10, test.root.right_child.val)

#   end
# end

# class BinarySearchTreeClassTest < Test::Unit::TestCase
#   def test_Binary_Search_Tree_properties_existence
#     test = Binary_Search_Tree.new()

#     assert_respond_to(test, :root)
#     assert_respond_to(test, :size)

#   end

#   def test_Binary_Search_Tree_methods_existence
#     test = Binary_Search_Tree.new()

#     assert_respond_to(test, :insert)
#     assert_respond_to(test, :contains)
#     assert_respond_to(test, :delete)
#   end

#   def test_Binary_Search_Tree_insert_method_single_node
#     test = Binary_Search_Tree.new()
#     test.insert(5)

#     assert_equal(5, test.root.val)
#   end

#   def test_Binary_Search_Tree_insert_method_three_nodes
#     test = Binary_Search_Tree.new()
#     test.insert(5)
#     test.insert(10)
#     test.insert(2)

#     assert_equal(5, test.root.val)
#     assert_equal(10, test.root.right_child.val)
#     assert_equal(2, test.root.left_child.val)
#   end

#   def test_Binary_Search_Tree_search_method_node_exists
#     test = Binary_Search_Tree.new()
#     test.insert(5)
#     test.insert(10)
#     test.insert(2)

#     assert_equal(true, test.search(10))
#   end

#   def test_Binary_Search_Tree_search_method_node_does_not_exist
#     test = Binary_Search_Tree.new()
#     test.insert(5)
#     test.insert(10)
#     test.insert(2)

#     assert_equal(false, test.search(7))
#   end

#   def test_Binary_Search_Tree_delete_method_removes_node
#     test = Binary_Search_Tree.new()
#     test.insert(5)
#     test.insert(10)
#     test.insert(2)

#     assert_equal(true, test.search(10))

#     test.delete(10)

#     assert_equal(false, test.search(10))
#   end

#   def test_Binary_Search_Tree_delete_method_removes_node
#     test = Binary_Search_Tree.new()
#     test.insert(5)
#     test.insert(10)
#     test.insert(2)

#     assert_equal(3, test.size)

#     test.delete(10)

#     assert_equal(2, test.size)
#   end
# end
