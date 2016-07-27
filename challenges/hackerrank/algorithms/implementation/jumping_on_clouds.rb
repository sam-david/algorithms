# PASSED 20/20

def shortest_path(clouds_array)
  moves = 0
  current_index = 0
  until current_index == clouds_array.length - 1
    if clouds_array[current_index + 2].nil?
      current_index += 1
    elsif clouds_array[current_index + 2] == 0
      current_index += 2
    elsif clouds_array[current_index + 2] == 1
      current_index += 1
    end
    moves += 1
  end
  moves
end

# p shortest_path([0, 0, 1, 0, 0, 1, 0])
# p shortest_path([0, 0, 0, 0, 1, 0])
p shortest_path([0, 0, 0, 1, 0, 0])
