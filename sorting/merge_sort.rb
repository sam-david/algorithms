
# TODO: Not returning final joined array
def merge_sort(input)
  p input
  # return input if input.length <= 1

  if input.length <= 1
    return input
  end

  mid_index = (input.length / 2).floor
  p mid_index
  left = input[0..(mid_index - 1)]
  right = input[mid_index..-1]
  p "LEFT: #{left}"
  p "Right: #{right}"
  return join_arrays(merge_sort(left), merge_sort(right))
end

def join_arrays(array1, array2)
  p1 = 0
  p2 = 0
  result = Array.new

  if array1 === []
    return array2
  elsif array2 === []
    return array1
  end

  while array1[p1] != nil && array2[p2] != nil
    if array1[p1] <= array2[p2]
      result.push(array1[p1])
      p1 += 1
    else
      result.push(array2[p2])
      p2 += 1
    end
  end
  p "array1: #{array1}, array2: #{array2}"
  p "result #{result}"
  result
end

# class MergeSortTest < Test::Unit::TestCase
#   def test_mergeSort_should_handle_example_case
#     test = mergeSort([8,3,2,10])
#     answer = [2,3,8,10]

#     assert_equal(answer, test);
#   end

#   def test_mergeSort_should_handle_empty_input
#     test = mergeSort([])
#     answer = []

#     assert_equal(answer, test);
#   end

#   def test_mergeSort_should_handle_large_input
#     testInput = []
#     $i = 1000000

#     while $i > 0
#       toPush = Random.rand(1000000)
#       testInput.push(toPush)
#       $i = $i - 1
#     end

#     test = mergeSort(testInput)
#     assert_equal(testInput.sort, test)
#   end

# end
