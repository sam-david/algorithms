# PASSED 10/10

def sum_pairs(array, k_value)
  pairs_count = 0
  array.each_with_index do |val1, index|
    array[index + 1..-1].each do |val2|
      if (val1 + val2) % k_value == 0
        pairs_count += 1
      end
    end
  end
  pairs_count
end

p sum_pairs([1, 3, 2, 6, 1, 2],3)
