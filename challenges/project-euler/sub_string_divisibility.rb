# SOLVED
# 16695334890, 6 different perms match

p permuations = [0,1,2,3,4,5,6,7,8,9].permutation(10).to_a
pandigital_count = 0
pandigital_sum = 0
test_count = 0

permuations.each do |p_array|
  test_count +=1
  p "##{test_count}/#{permuations.length}"
  if [p_array[1],p_array[2],p_array[3]].join.to_i % 2 == 0
    if [p_array[2],p_array[3],p_array[4]].join.to_i % 3 == 0
      if [p_array[3],p_array[4],p_array[5]].join.to_i % 5 == 0
        if [p_array[4],p_array[5],p_array[6]].join.to_i % 7 == 0
          if [p_array[5],p_array[6],p_array[7]].join.to_i % 11 == 0
            if [p_array[6],p_array[7],p_array[8]].join.to_i % 13 == 0
              if [p_array[7],p_array[8],p_array[9]].join.to_i % 17 == 0
                pandigital_count += 1
                pandigital_sum += [p_array[0],p_array[1],p_array[2],p_array[3],p_array[4],p_array[5],p_array[6],p_array[7],p_array[8],p_array[9]].join.to_i
              end
            end
          end
        end
      end
    end
  end
end

p pandigital_count
p pandigital_sum
