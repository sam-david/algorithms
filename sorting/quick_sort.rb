# Take pivote from middle, put values in a before and after array. Perform operation recursively until single values and concat before quicksort with pivot and after quicksort

def quick_sort(input)
  p input
  return input if input.length <= 1

  pivot_index = (input.length / 2).floor
  pivot = input[pivot_index]
  p "pivot #{pivot}"
  before = Array.new
  after = Array.new

  input.each_with_index do |num, i|
    if i != pivot_index
      if input[i] <= pivot
        before.push(input[i])
      else
        after.push(input[i])
      end
    end
  end

  return quick_sort(before) + [pivot] + quick_sort(after)
end


# require 'test/unit'

# class QuickSortTest < Test::Unit::TestCase
#   def test_quickSort_should_handle_example_case
#     test = quickSort([3,9,1,4,7])
#     answer = [1,3,4,7,9]

#     assert_equal(answer, test);
#   end

#   def test_quickSort_should_handle_empty_input
#     test = quickSort([])
#     answer = []

#     assert_equal(answer, test);
#   end

#   def test_quickSort_should_handle_large_input
#     testInput = []
#     $i = 1000000

#     while $i > 0
#       toPush = Random.rand(1000000)
#       testInput.push(toPush)
#       $i = $i - 1
#     end

#     test = quickSort(testInput)
#     assert_equal(testInput.sort, test)
#   end

# end
