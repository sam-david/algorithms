# https://projecteuler.net/problem=9
# Solved

(0..500).each do |a_value|
  (a_value + 1..1000).each do |b_value|
    c_value = Math.sqrt((a_value ** 2 + b_value ** 2))
    triplet_total_sum = a_value + b_value + c_value
    # c_value even int and is it bigger than b, then pytha triplet
    if c_value % 1 == 0 && c_value > b_value && triplet_total_sum == 1000
      p 'Found triplet!'
      p "#{a_value} + #{b_value} = #{c_value}"
      p a_value * b_value * c_value
    end
  end
end
