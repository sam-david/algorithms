# https://www.hackerrank.com/challenges/cut-the-sticks
# PASSED

cut_the_sticks = -> (array) do
  while array.any?
    p array.length
    array = cut(array)
  end
end

def cut(array)
  cut_length = array.min
  array.reject do |num|
    num - cut_length <= 0
  end.map do |num|
    num - cut_length
  end
end

cut_the_sticks.([5, 4, 4, 2, 2, 8])
