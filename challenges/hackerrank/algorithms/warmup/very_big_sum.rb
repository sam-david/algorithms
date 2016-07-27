# SOLVED

def sum(num1, num2)
  # args must be split into array
  result = []
  remainder = 0
  num1 = num1.reverse
  num2 = num2.reverse
  if num2.length > num1.length
    num1, num2 = num2, num1
  end

  num1.each_with_index do |val, index|
    opposite_val = num2[index]
    if opposite_val.nil?
      working_value = val + remainder
    else
      working_value = val + opposite_val + remainder
    end
    last_index = index == num1.length - 1 ? true : false
    if working_value >= 10 && last_index
      temp = arrayify(working_value)
      result.unshift(temp[0],temp[1])
    elsif working_value >= 10
      temp = arrayify(working_value)
      remainder = temp[0]
      result.unshift(temp[1])
    else
      result.unshift(working_value)
      remainder = 0
    end
  end
  result
end

def sum_array(array)
  total = []
  array[1..-1].each_with_index do |val, index|
    if index == 0
      total = sum(arrayify(array[0]), arrayify(val))
    else
      total = sum(total, arrayify(val))
    end
  end
  total.join
end

def arrayify(num)
  num.to_s.split("").map(&:to_i)
end

# p sum_array([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
p sum_array([8000000007, 80000000065, 9000000007])
# p sum_array([1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041, 1007548981, 1004402249]) # 10047338126
