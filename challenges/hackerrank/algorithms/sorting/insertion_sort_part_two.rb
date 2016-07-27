# perform insertion sort on an unsorted array. printing each every time an element is moved

def insertion_sort(array)
  current_array = array
  array.each_with_index do |num1, index|
    p "num1 #{num1}"
    current_array.each do |num2|
      p "num2 #{num2}"
    end
    # array.drop(index + 1).each do |num2|
    #   p "num2 #{num2}"
    #   if num1 > num2
    #     current_array.delete_at(index)
    #     current_array.insert(index, num1)
    #   elsif num1 < num2
    #     break
    #   end
    #   # if num2 < num1
    #   #   current_array.insert(index, num2)

    # end
    # p current_array
  end
end

insertion_sort([1, 4, 3, 5, 6, 2])
# 1 4 3 5 6 2
# 1 3 4 5 6 2
# 1 3 4 5 6 2
# 1 3 4 5 6 2
# 1 2 3 4 5 6
insertion_sort([9, 8, 6, 7, 3, 5, 4, 1, 2])
# 8 9 6 7 3 5 4 1 2
# 6 8 9 7 3 5 4 1 2
# 6 7 8 9 3 5 4 1 2
# 3 6 7 8 9 5 4 1 2
# 3 5 6 7 8 9 4 1 2
# 3 4 5 6 7 8 9 1 2
# 1 3 4 5 6 7 8 9 2
# 1 2 3 4 5 6 7 8 9


