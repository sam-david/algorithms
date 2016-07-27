# ACCEPTED
# https://leetcode.com/problems/valid-anagram/

# Given two strings s and t, write a function to determine if t is an anagram of s.

def is_anagram(s, t)
  s_count = Hash.new(0)
  t_count = Hash.new(0)
  s.each_char do |char|
    s_count[char] += 1
  end
  t.each_char do |char|
    t_count[char] += 1
  end
  s_count.sort.to_a == t_count.sort.to_a ? true : false
end

p is_anagram('abc','bac')
p is_anagram('abc','bc')

# I think there might be a better way to compare the hashes
