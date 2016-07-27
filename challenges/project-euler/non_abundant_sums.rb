# SOLVED, takes forever to run
# 4179871 from 1456 nums
# -1 => 'Deficient', 0 => 'Perfect', 1 => 'Abundant'
def is_perfect?(num)
  divisors = []
  (1..(num/2)).each do |div|
    if num % div == 0
      divisors.push(div)
    end
  end
  divisor_total = divisors.reduce(:+)
  if divisor_total == num
    0
  elsif divisor_total < num
    -1
  elsif divisor_total > num
    1
  end
end

def abundant_number_pairs
  result = []
  (12..28123).each do |num|
    if is_perfect?(num) == 1
      result.push(num)
    end
  end
  pairs = Hash.new
  result.each_with_index do |num1, index|
    pairs[num1] = []
    result[index..-1].each do |num2|
      pairs[num1].push(num2)
    end
  end

  pairs
end

def abundant_sum(pairs)
  p 'starting abu'
  no_sum_array = []
  (1..28123).each do |num|
    p num
    has_abundant_sum = false
    catch :has_sum do
      @@pairs.each do |key, values_array|
        values_array.each do |val|
          if key + val == num
            has_abundant_sum = true
            throw :has_sum
          end
        end
      end
    end
    if has_abundant_sum == false
      no_sum_array.push(num)
    end
  end
  p no_sum_array
  p no_sum_array.length
  no_sum_array.reduce(:+)
end

pairs = abundant_number_pairs
p abundant_sum(pairs)

