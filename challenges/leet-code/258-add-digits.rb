# ACCEPTED
# https://leetcode.com/problems/add-digits/
# Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
# Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

def add_digits(num)
  return num if num < 10
  sum = 0
  num.to_s.split("").each do |num|
    sum += num.to_i
  end
  add_digits(sum)
end

p add_digits(111)
