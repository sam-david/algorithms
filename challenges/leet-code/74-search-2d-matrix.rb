# https://leetcode.com/problems/search-a-2d-matrix/

# Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

# Integers in each row are sorted from left to right.
# The first integer of each row is greater than the last integer of the previous row.

def search_matrix(matrix, target)
  (0..matrix[0].length).each do |num|
    p num
  end
end

search_matrix([[1]],0)
