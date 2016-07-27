# https://www.hackerrank.com/challenges/2d-array
# PASSED

def largest_hourglass(array)
  sums = []
  array.each_with_index do |row, index1|
    next if index1 > 3
    row.each_with_index do |char, index2|
      next if index2 > 3
      current_sum = array[index1][index2] + array[index1][index2 + 1] + array[index1][index2 + 2] + array[index1 + 1][index2 + 1] + array[index1 + 2][index2] + array[index1 + 2][index2 + 1] + array[index1 + 2][index2 + 2]
      sums.push(current_sum)
    end
  end
  sums.max
end

p largest_hourglass([
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 9, 2, -4, -4, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0]])

p largest_hourglass([
[-1, -1, 0, -9, -2, -2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1, -9, -2, -4, -4, -5],
[-7, -3, -3, -2, -9, -9],
[-1, -3, -1, -2, -4, -5]]) # -6
