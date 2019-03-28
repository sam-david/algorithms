require 'pry'

# Given array of 4 integers find the count of the tallest two integers

# def birthdayCakeCandles(ar)
#   tallest_candles = []
# 
#   ar.each do |num|
#     #binding.pry
#     if tallest_candles.empty?
#       tallest_candles.push(num)
#     elsif tallest_candles.first + 1 < num
#       tallest_candles.shift
#       tallest_candles.push(num)
#     elsif tallest_candles.first == num
#       tallest_candles.push(num)
#     end
#   end
# 
#   tallest_candles
# end

# def birthdayCakeCandles(ar)
#   tc = []
# 
#   ar.sort.reverse.each do |num|
#     if tc.empty?
#       tc.push(num)
#     elsif tc.first - 1 == num
#       tc.push(num)
#     elsif tc.first == num
#       tc.unshift(num)
#     end
#   end
# 
#   tc.count
# end

def birthdayCakeCandles(ar)
  tc = []

  ar.sort.reverse.each do |num|
    if tc.empty?
      tc.push(num)
    elsif tc.first == num
      tc.push(num)
    elsif tc.first < num
      tc.clear
      tc.push(num)
    end
  end

  tc.count
end

p birthdayCakeCandles([3, 2, 1, 3])

p birthdayCakeCandles([2, 1, 3, 3])
p birthdayCakeCandles([1, 2, 3, 3])
p birthdayCakeCandles([1, 3, 3, 3])
p birthdayCakeCandles([3, 3, 3, 3])
p birthdayCakeCandles([3, 3, 1, 1])
p birthdayCakeCandles([1, 3, 1, 1])
p birthdayCakeCandles([1, 1, 1, 1])
p birthdayCakeCandles([1, 2, 1, 2])


