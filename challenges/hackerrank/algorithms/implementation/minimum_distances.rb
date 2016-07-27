# PASSED 20/20

def minimum_distance(array)
  min_distance = Float::INFINITY
  array.each_with_index do |val1, index1|
    array[index1+1..-1].each_with_index do |val2, index2|
      index2 = index1 + index2 + 1
      if val1 == val2
        current_distance = index2 - index1
        if current_distance < min_distance
          min_distance = current_distance
        end
      end
    end
  end
  min_distance == Float::INFINITY ? -1 : min_distance
end

p minimum_distance([7, 1, 3, 4, 1, 7])
