# Keeps a sorted and unsorted portin of array. Starting with the first value, compares value to the left and shifts if the vlaue is larger. Otherwise, value will assume to be sorted and teh process is repeated for the remainder of the array.

def insertionSort(input)
  input.each_with_index do |num, i|
    temp = input[i]
    pointer = i
    # shift value down to left until smaller value is found
    while pointer > 0 && temp < input[pointer - 1]
      input[pointer] = input[pointer - 1]
      pointer -= 1
    end
    input[pointer] = temp
  end
  input
end


require 'test/unit'

class InsertionSortTest < Test::Unit::TestCase
  def test_insertionSort_should_handle_example_case
    test = insertionSort([3,9,1,4,7])
    answer = [1,3,4,7,9]

    assert_equal(answer, test);
  end

  def test_insertionSort_should_handle_empty_input
    test = insertionSort([])
    answer = []

    assert_equal(answer, test);
  end

  def test_insertionSort_should_handle_large_input
    testInput = []
    $i = 1000000

    while $i > 0
      toPush = Random.rand(1000000)
      testInput.push(toPush)
      $i = $i - 1
    end

    test = insertionSort(testInput)
    assert_equal(testInput.sort, test)
  end

end
