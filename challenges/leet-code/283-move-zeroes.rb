# ACCEPTED
# https://leetcode.com/problems/move-zeroes/

# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

# Note:
# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.

def move_zeroes(nums)
  zeros_index = []
  nums.each_with_index do |num, index|
    if num == 0
      p index
      zeros_index.push(index)
    end
  end
  nums.delete_if.with_index { |_, index| zeros_index.include? index }
  zeros_index.length.times do
    nums.push(0)
  end
  nums
end

p move_zeroes([0, 1, 0, 3, 12])
p move_zeroes([0,0,1])
