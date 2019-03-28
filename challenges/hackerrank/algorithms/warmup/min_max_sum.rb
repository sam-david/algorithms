require 'pry'
# Given array of 5 ints, find the minimum and maximum sum using exactly 4 of those ints

def miniMaxSum(arr)
  sorted_array = arr.sort

  min = sorted_array[0..3].reduce(:+)
  max = sorted_array[1..4].reduce(:+)

  print min, " ", max
end

p miniMaxSum([1, 2, 3, 4, 5])
p miniMaxSum([7, 69, 2, 221, 8974])

