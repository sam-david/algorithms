# SOLVED
# https://projecteuler.net/problem=24
# find longerst non increasing suffix
# indentify pivot
# find rightmost successor to pivot in suffix
# swap with pivot
# reverse the suffix
require 'pry'

def next_permutation(array)
  pivot_index = array.length - 1

  # find index after pivot, technically
  while pivot_index > 0 && array[pivot_index - 1] >= array[pivot_index]
    pivot_index -= 1
  end

  return false if pivot_index <= 0

  # find successor
  successor_index = array.length - 1
  while array[successor_index] <= array[pivot_index-1]
    successor_index -= 1
  end

  # swap pivot and succesor
  array[pivot_index - 1], array[successor_index] = array[successor_index], array[pivot_index - 1]

  array[(pivot_index)..-1] = array[(pivot_index)..-1].reverse
  array
end

def lexicographic_permutations(array)
  count = 1
  until next_permutation(array) == false
    count += 1
    if count == 1000000
      p array
    end
  end
  count
end

p lexicographic_permutations([0,1,2,3,4,5,6,7,8,9])

# INTIAL SOLUTION, pivot location incorrect
# def next_permutation(array)
#   pivot_index = 0

#   array.reverse.each_with_index do |num, index|
#     if num > array[array.length - index - 2]
#       pivot_index = array.length - index - 2
#       break
#     end
#   end

#   return false if pivot_index <= 0

#   array[(pivot_index+1)..-1].reverse.each_with_index do |num, index|
#     current_index = array.length - index - 1
#     if num > array[pivot_index]
#       array[pivot_index], array[current_index] = array[current_index], array[pivot_index]
#       break
#     end
#   end

#   array[(pivot_index+1)..-1] = array[(pivot_index+1)..-1].reverse
#   array
# end
