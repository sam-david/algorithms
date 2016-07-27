# https://www.hackerrank.com/challenges/ruby-strings-iteration
require 'pry'

def count_multibyte_char(string)
  count = 0
  string.each_char do |char|
    p "char: #{char}"
    if char.bytes.length > 1
      count += 1
    end
  end
  count
end

p count_multibyte_char('¥1000')
