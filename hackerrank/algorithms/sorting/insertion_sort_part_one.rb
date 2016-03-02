# given a sorted list with an unsorted number in the rightmost cell, can you mimic insertion sort, printing each step until sorted
# PASSED

def format_view(array)
  array.join(" ")
end

def insertion_sort(array)
  unsorted_value = array.pop
  current_array = []
  array.reverse.each_with_index do |num, index|
    if num > unsorted_value
      current_array = array.insert((array.length - index - 1), num )
      puts format_view(current_array)
      current_array.delete_at(array.length - index - 1)
    else
      current_array.insert(array.length - index, unsorted_value)
      puts format_view(current_array)
      break
    end

    if index == array.length - 1 && num > unsorted_value
      current_array.unshift(unsorted_value)
      puts format_view(current_array)
      break
    end
  end
end

insertion_sort([2, 4, 6, 8, 3])

insertion_sort([2, 3, 4, 5, 6, 7, 8, 9, 10, 1])
# 2 3 4 5 6 7 8 9 10 10
# 2 3 4 5 6 7 8 9 9 10
# 2 3 4 5 6 7 8 8 9 10
# 2 3 4 5 6 7 7 8 9 10
# 2 3 4 5 6 6 7 8 9 10
# 2 3 4 5 5 6 7 8 9 10
# 2 3 4 4 5 6 7 8 9 10
# 2 3 3 4 5 6 7 8 9 10
# 2 2 3 4 5 6 7 8 9 10
# 1 2 3 4 5 6 7 8 9 10
