# ACCEPTED
# https://leetcode.com/problems/contains-duplicate/

# Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

def contains_duplicate(nums)
  nums.length == 0 || nums.uniq.length == nums.length ? false : true
end

p contains_duplicate([0])
