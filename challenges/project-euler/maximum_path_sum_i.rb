triangle_array = []

File.open('data/p067_triangle.txt', "r") do |f|
  f.each_line do |line|
    triangle_array.push(line.split(" ").map {|num| {num: num.to_i } })
  end
end

triangle_array.each_with_index do |row, row_index|
  row.each_with_index do |num, col_index|
    # add
    next_row = triangle_array[row_index + 1]
    if next_row
      num[:left] = next_row[col_index]
      num[:right] = next_row[col_index + 1]
    end
  end
end

root = triangle_array[0][0]

def walk_tree(node)
  # two base cases
  if node.nil?
    return 0
  end
  if node.key?('memo_sum')
    return node[:memo_sum]
  end
  # calculate sum
  node[:memo_sum] = node[:num] + [walk_tree(node[:left]),walk_tree(node[:right])].max
  return node[:memo_sum]
end

p walk_tree(root)
