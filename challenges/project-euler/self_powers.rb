# https://projecteuler.net/problem=48
# SOLVED

def self_power(n)
  sum = 0
  (1..n).each do |num|
    sum += num ** num
  end
  sum
end

p self_power(1000)
