# find the absolute difference between the sum of the diagonals in a square matrix

def diagonal_difference(array)
  diag1 = 0
  diag2 = 0
  array.each_with_index do |row, index|
    diag1 += row[index]
    diag2 += row[array.length - index - 1]
  end
  (diag1 - diag2).abs
end

p diagonal_difference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])
# diagonal_difference([[11, 2, 4, 6], [4, 5, 6, 8], [10, 8, -12, 20], [2, 5, 14, 18]])
