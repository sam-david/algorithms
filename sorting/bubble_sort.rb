# Keeps a sorted and unsorted portion of array opposite of insertion and selection sort. Compares value with value to the right and swaps if the current value is greater than the next value. This is reapeated until the end of the unsorted portion of the array. At this point the assumed max will have been pushed all the way to the right. A sorted array is found when no swaps occur.

def bubbleSort(input)
  end_index = input.length
  while end_index != 0
    end_index -= 1
    swap = false
    (0..(end_index - 1)).each do |i|
      if input[i] > input[i + 1]
        temp = input[i]
        input[i] = input[i + 1]
        input[i + 1] = temp
        swap = true
      end
    end

    break if !swap
  end

  input
end


class BubbleSortTest < Test::Unit::TestCase
  def test_bubbleSort_should_handle_example_case
    test = bubbleSort([8,3,2,10])
    answer = [2,3,8,10]

    assert_equal(answer, test);
  end

  def test_bubbleSort_should_handle_empty_input
    test = bubbleSort([])
    answer = []

    assert_equal(answer, test);
  end

  def test_bubbleSort_should_handle_large_input
    testInput = []
    $i = 1000000

    while $i > 0
      toPush = Random.rand(1000000)
      testInput.push(toPush)
      $i = $i - 1
    end

    test = bubbleSort(testInput)
    assert_equal(testInput.sort, test)
  end

end
