require 'pry'

# Given array of 4 integers find the count of the tallest two integers


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


