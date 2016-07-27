# output the first N palindromic prime numbers
# PASSED: Learned good lesson on order in && statments. Makes sense to have most expsive expressions first if possible

require 'benchmark'
require 'prime'

# arr = STDIN.readlines.to_a.map {|line| line.rstrip}

# cheat
palindromic_primes_cheat = -> (n) do
  answer_array = []
  index = 1
  while answer_array.length <= n do
    if Prime.prime?(index) && isPalindromic?(index)
      answer_array.push(index)
    end
    index += 1
  end
  answer_array
end

# ruby library
palindromic_primes = -> (n) do
  1.upto(Float::INFINITY).lazy.select do |num|
     isPalindromic?(num) && Prime.prime?(num)
  end.first(n)
end

# my methods
# palindromic_primes = -> (n) do
#   1.upto(Float::INFINITY).lazy.select do |num|
#     if isPrime?(num) && isPalindromic?(num)
#       p "#{num}"
#       true
#     end
#   end.first(n)
# end

def isPalindromic?(n)
  n.to_s == n.to_s.reverse
end

def isPrime?(n)
  if n == 1
    return false
  end

  (2..n - 1).each do |num|
      if n % num == 0
          return false
      end
  end
  return true
end


# p isPrime?(11)
# p isPalindromic?(11)
# p palindromic_primes_cheat.(5)
# time1 = Benchmark.measure do
#   palindromic_primes_cheat.(200)
# end
# puts "Time elapsed #{time1*1000} milliseconds"

time2 = Benchmark.measure do
  p palindromic_primes.(100)
end
puts "Time elapsed #{time2*1000} milliseconds"
time3 = Benchmark.measure do
  p palindromic_primes.(200)
end
puts "Time elapsed #{time3*1000} milliseconds"
# [ 2, 3, 5, 7, 11 ]
