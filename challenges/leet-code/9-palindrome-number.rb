# ACCEPTED
# https://leetcode.com/problems/palindrome-number/

# Determine whether an integer is a palindrome. Do this without extra space.

def is_palindrome(input)
  input = input.to_s
  index = 0
  input.each_char do |char|
    if char != input[input.length - index - 1]
      return false
    end
    index += 1
  end
  return true
end


p isPalindrome(121)
p isPalindrome(1223)
