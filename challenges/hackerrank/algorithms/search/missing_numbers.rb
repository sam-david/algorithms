# Given two arrays, list the missing numbers in array A vs B
# 25.99/45. Timed out on last test
# arr = STDIN.readlines.to_a.map {|line| line.rstrip}

require_relative 'missing_numbers_data'

def missing_numbers(array)
  lines = array.each_slice(2).to_a.each {|arr| arr.shift}.flatten
  a_line = lines[0].split(" ").sort
  b_line = lines[1].split(" ").sort
  a_line.each do |e|
    b_line.delete_at(b_line.index(e) || b_line.length)
  end
  puts b_line.uniq.join(" ")
end

missing_numbers(["10", "203 204 205 206 207 208 203 204 205 206", "13", "203 204 204 205 206 207 205 208 203 206 205 206 204"])

missing_numbers(missing_numbers_data)
# 3670 3674 3677 3684 3685 3695 3714 3720
