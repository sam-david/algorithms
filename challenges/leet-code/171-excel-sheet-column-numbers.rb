# https://leetcode.com/problems/excel-sheet-column-number/

# Given a column title as appear in an Excel sheet, return its corresponding column number.

# For example:

#     A -> 1
#     B -> 2
#     C -> 3
#     ...
#     Z -> 26
#     AA -> 27
#     AB -> 28

def title_to_number(s)
  s.split("").map {|ch| ch.ord - 'A'.ord + 1}.reduce(:+)
end

p title_to_number("A")
p title_to_number("Z")
p title_to_number("AA")
