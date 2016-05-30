class Node
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end

end

class LinkedList
  attr_reader :head, :tail, :list_length

  def initialize
    @head = nil
    @tail = nil
    @list_length = 0
  end

  def append(val)
    if list_length == 0
      @head = Node.new(val)
      @tail = @head
    else
      @tail.next = Node.new(val)
      @tail = @tail.next
    end
    @list_length += 1
  end

  def insert(insert_val, search_val)
    work = @head
    while work != nil
      if work.val === search_val
        reference = work.next
        work.next = Node.new(insert_val)
        work.next.next = reference
        if reference === nil
          @tail = work.next
        end
        @list_length += 1
        return
      end
      work = work.next
    end
    p "Search value #{search_val} not found!"
  end

  # this seems to not be working on values that are not head or tail. Somethign wrong in while loop?
  def delete(location)
    # linked list constains single element, length === 0
    if location === 0
      if @list_length === 0
        @head = nil
        @tail = nil
        @this.list_length -= 1
        return
      else
        @head = @head.next
        @list_length -= 1
        return
      end
    end

    work = @head
    counter = 0
    while work != nil
      if counter === (location - 1) && work.next != nil && work.next === @tail
        work.next = work.next.next
        @tail = work
        @list_length -= 1
        return
      end

      if counter === (location - 1) && work.next != nil
        work.next = work.next.next
        @list_length -= 1
      end

      counter += 1
      work = work.next
    end
    p "Index not found #{location}"
  end

  def contains(val)
    work = @head
    while work != nil
      if work.val == val
        return true
      end
      work = work.next
    end
    false
  end
end


linked_list = LinkedList.new

# linked_list.append(5)
# linked_list.append(6)
# linked_list.append(7)
# linked_list.append(8)
# # linked_list.insert(3, 6)
# # linked_list.delete(2)
# p linked_list.contains(6)
# p linked_list.contains(2)
# p linked_list


# //////////////////////////////////////////////////////////
# ///////////////  DO NOT TOUCH TEST BELOW!!!  /////////////
# //////////////////////////////////////////////////////////

# require 'test/unit'

# class LinkedListNodeTest < Test::Unit::TestCase
#   def test_creation_of_node
#     test = Node.new(3)

#     assert_not_equal(nil, test)
#   end
#   def test_encoding_a_value
#     test = Node.new(5)

#     assert_equal(5, test.value)
#     assert_equal(nil, test.next)
#   end
#   def test_pointing_to_another_node
#     initial = Node.new(5)
#     target = Node.new(10)
#     initial.next = target

#     assert_equal(5, initial.value)
#     assert_equal(10, initial.next.value)
#   end
# end

# class LinkedListClassTest < Test::Unit::TestCase
#   def test_linked_list_properties_existence
#     test = Linked_List.new()

#     assert_respond_to(test, :head)
#     assert_respond_to(test, :tail)
#     assert_respond_to(test, :listLength)

#   end

#   def test_linked_list_methods_existence
#     test = Linked_List.new()

#     assert_respond_to(test, :append)
#     assert_respond_to(test, :insert)
#     assert_respond_to(test, :delete)
#     assert_respond_to(test, :contains)
#   end

#   def test_linked_list_append_method_single_node
#     test = Linked_List.new()
#     test.append(5)

#     assert_equal(5, test.head.value)
#     assert_equal(5, test.tail.value)
#   end

#   def test_linked_list_append_method_two_node
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)

#     assert_equal(5, test.head.value)
#     assert_equal(10, test.tail.value)
#   end

#   def test_linked_list_insert_method_between_nodes
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.insert(13, 5)

#     assert_equal(5, test.head.value)
#     assert_equal(13, test.head.next.value)
#     assert_equal(10, test.head.next.next.value)
#     assert_equal(10, test.tail.value)
#   end

#   def test_linked_list_insert_method_modify_tail
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.insert(13, 10)

#     assert_equal(5, test.head.value)
#     assert_equal(10, test.head.next.value)
#     assert_equal(13, test.head.next.next.value)
#     assert_equal(13, test.tail.value)
#   end

#   def test_linked_list_insert_method_no_searchValue_match
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.insert(13, 17)

#     assert_equal(5, test.head.value)
#     assert_equal(10, test.head.next.value)
#     assert_equal(10, test.tail.value)
#     assert_equal(2, test.listLength)
#   end

#   def test_linked_list_delete_method_delete_middle
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.append(15)
#     test.delete(1)

#     assert_equal(5, test.head.value)
#     assert_equal(15, test.tail.value)
#     assert_equal(15, test.head.next.value)
#     assert_equal(2, test.listLength)
#   end

#   def test_linked_list_delete_method_delete_head
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.append(15)
#     test.delete(0)

#     assert_equal(10, test.head.value)
#     assert_equal(15, test.tail.value)
#     assert_equal(15, test.head.next.value)
#     assert_equal(2, test.listLength)
#   end

#   def test_linked_list_delete_method_delete_tail
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.append(15)
#     test.delete(2)

#     assert_equal(5, test.head.value)
#     assert_equal(10, test.tail.value)
#     assert_equal(10, test.head.next.value)
#     assert_equal(2, test.listLength)
#   end

#   def test_linked_list_delete_method_delete_out_of_range
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.append(15)
#     test.delete(5)

#     assert_equal(5, test.head.value)
#     assert_equal(15, test.tail.value)
#     assert_equal(10, test.head.next.value)
#     assert_equal(15, test.head.next.next.value)
#     assert_equal(3, test.listLength)
#   end

#   def test_linked_list_contains_method_when_true
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.append(15)

#     assert_equal(true, test.contains(10))
#   end

#   def test_linked_list_contains_method_when_false
#     test = Linked_List.new()
#     test.append(5)
#     test.append(10)
#     test.append(15)

#     assert_equal(false, test.contains(75))
#   end
# end
