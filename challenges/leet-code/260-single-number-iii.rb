# Accepted
# https://leetcode.com/problems/single-number-iii/
# Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

# For example:

# Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

def single_number(nums)
  counts = Hash.new(0)
  nums.each do |num|
    if counts[num] == 0
      counts[num] += 1
    elsif counts[num] == 1
      counts.delete(num)
    end
  end
  [counts.keys[0], counts.keys[1]]
end

p single_number([2, 3, 5, 2, 6, 3])
