####### WIP ########

class HashTable
  def initialize
    @storage = []
    @buckets = 8
    @size = 0
  end

  # verify
  def hash(str)
    hash = 5381
    str.each_byte do |char|
      p "hash #{hash}, shift #{(hash << 5)}"
      # hash = ((hash << 5) + hash) + char
      hash = (hash * 33) + char
    end
    p hash
    p @buckets
    hash * @buckets
  end


end

hash_table = HashTable.new
p hash_table.hash('test')


 # //////////////////////////////////////////////////////////
 # ///////////////  DO NOT TOUCH TEST BELOW!!!  /////////////
 # //////////////////////////////////////////////////////////

 # require 'test/unit'

 # class HashTableClassTest < Test::Unit::TestCase
 #   def test_Hash_Table_properties_existence
 #     test = Hash_Table.new()

 #     assert_respond_to(test, :buckets)
 #     assert_respond_to(test, :storage)
 #     assert_respond_to(test, :size)
 #   end

 #   def test_Hash_Table_methods_existence
 #     test = Hash_Table.new()

 #     assert_respond_to(test, :hash)
 #     assert_respond_to(test, :insert)
 #     assert_respond_to(test, :delete)
 #     assert_respond_to(test, :retrieve)
 #   end

 #   def test_Hash_Table_hashing_method
 #     test = Hash_Table.new()

 #     assert_equal(1, test.hash('hello', 8))
 #   end

 #   def test_Hash_Table_insert_a_key_value_pair
 #     test = Hash_Table.new()

 #     assert_equal(0, test.storage.length)
 #     assert_equal(0, test.size)

 #     test.insert('hello', 5)

 #     assert_equal(1, test.size)
 #     assert_equal('hello', test.storage[1][0][0])
 #     assert_equal(5, test.storage[1][0][1])
 #   end

 #   def test_Hash_Table_insert_a_second_key_value_pair
 #     test = Hash_Table.new()

 #     assert_equal(0, test.storage.length)
 #     assert_equal(0, test.size)

 #     test.insert('hello', 5)

 #     assert_equal(1, test.size)
 #     assert_equal('hello', test.storage[1][0][0])
 #     assert_equal(5, test.storage[1][0][1])

 #     test.insert('good', 10)

 #     assert_equal(2, test.size)
 #     assert_equal('good', test.storage[6][0][0])
 #     assert_equal(10, test.storage[6][0][1])
 #   end

 #   def test_Hash_Table_insert_should_handle_collisions
 #     test = Hash_Table.new()

 #     assert_equal(0, test.storage.length)
 #     assert_equal(0, test.size)

 #     test.insert('back', 5)

 #     assert_equal(1, test.size)
 #     assert_equal('back', test.storage[6][0][0])
 #     assert_equal(5, test.storage[6][0][1])

 #     test.insert('good', 10)

 #     assert_equal(2, test.size)
 #     assert_equal('good', test.storage[6][1][0])
 #     assert_equal(10, test.storage[6][1][1])
 #   end

 #   def test_Hash_Table_delete_method_should_delete_pair
 #     test = Hash_Table.new()

 #     assert_equal(0, test.storage.length)
 #     assert_equal(0, test.size)

 #     test.insert('hello', 5)

 #     assert_equal(1, test.size)
 #     assert_equal('hello', test.storage[1][0][0])
 #     assert_equal(5, test.storage[1][0][1])

 #     test.delete('hello')

 #     assert_equal(0, test.size)
 #     assert_equal(undef, test.storage[6][0][0])
 #     assert_equal(undef, test.storage[6][0][1])
 #   end

 #   def test_Hash_Table_delete_should_not_modify_size_when_key_not_found
 #     test = Hash_Table.new()

 #     test.insert('hello', 5)
 #     test.insert('good', 10)

 #     assert_equal(2, test.size)

 #     test.delete('great')

 #     expect(test.size).to.equal(2)
 #   end

 #   def test_Hash_Table_retrieve_should_return_value_when_exists
 #     test = Hash_Table.new()

 #     test.insert('hello', 5)

 #     assert_equal(5, test.retrieve('hello'))
 #   end

 #   def test_Hash_Table_retrieve_should_return_nil_when_key_does_not_exist
 #     test = Hash_Table.new()

 #     test.insert('hello', 5)

 #     assert_equal(nil, test.retrieve('good'))
 #   end

 #   def test_Hash_Table_resize_should_double_the_number_of_buckets_when_the_size_exceeds_75_percent_of_bucket_capacity
 #     test = Hash_Table.new()
 #     test.insert('hello', 5)
 #     test.insert('good', 7)
 #     test.insert('haha', 10)
 #     test.insert('blah', 2)
 #     test.insert('foo', 3)
 #     test.insert('bar', 8)
 #     test.insert('taste', 1)

 #     assert_equal(16, test.buckets)
 #   end

 #   def test_Hash_Table_resize_should_halve_the_number_of_buckets_when_the_size_drops_below_25_percent_of_bucket_capacity
 #     test = Hash_Table.new()

 #     test.insert('hello', 5)
 #     test.insert('good', 7)
 #     test.insert('haha', 10)
 #     test.insert('blah', 2)
 #     test.insert('foo', 3)
 #     test.insert('bar', 8)
 #     test.insert('taste', 1)

 #     assert_equal(16, test.buckets)

 #     test.delete('hello')
 #     test.delete('good')
 #     test.delete('haha')
 #     test.delete('blah')

 #     assert_equal(8, test.buckets)
 #   end
 # end
