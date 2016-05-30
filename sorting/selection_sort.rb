# Keeps a sorted and unsorted portion of array. Starting with first value, SELECTs the min value when traversing over unsorted part of array. Then swaps that value with the leftmost unsorted value (or current value)

def selectionSort(input)
  input.each_with_index do |num1, i|
    min = num1
    min_index = i
    ((i+1)..(input.length - 1)).each do |j|
      p "j #{j}"
      if input[j] < min
        min = input[j]
        min_index = j
      end
    end
    input[min_index] = input[i]
    input[i] = min
  end
  input
end

class SelectionSortTest < Test::Unit::TestCase
  def test_selectionSort_should_handle_example_case
    test = selectionSort([8,3,2,10])
    answer = [2,3,8,10]

    assert_equal(answer, test);
  end

  def test_selectionSort_should_handle_empty_input
    test = selectionSort([])
    answer = []

    assert_equal(answer, test);
  end

  def test_selectionSort_should_handle_large_input
    testInput = []
    $i = 1000000

    while $i > 0
      toPush = Random.rand(1000000)
      testInput.push(toPush)
      $i = $i - 1
    end

    test = selectionSort(testInput)
    assert_equal(testInput.sort, test)
  end

end
