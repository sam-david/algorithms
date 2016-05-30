# https://www.hackerrank.com/challenges/quicksort1
# PASSED

def quicksort(array)
  left = []
  equal = []
  right = []
  pivot = array[0]
  array.each do |num|
    if num < pivot
      left.push(num)
    elsif num == pivot
      equal.push(num)
    elsif num > pivot
      right.push(num)
    end
  end
  (left + equal + right).join(" ")
end

p quicksort([4, 5, 3, 7, 2])
