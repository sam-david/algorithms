# ACCEPTED
# https://leetcode.com/problems/single-number/
# Given an array of integers, every element appears twice except for one. Find that single one.
# Note:
# Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

def single_number(nums)
  counts = Hash.new(0)
  nums.each do |num|
    if counts[num] == 0
      counts[num] += 1
    elsif counts[num] == 1
      counts.delete(num)
    end
  end
  counts.first[0]
end

single_number([2, 3, 5, 2, 6, 3, 6])
