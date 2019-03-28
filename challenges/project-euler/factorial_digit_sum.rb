# https://projecteuler.net/problem=20
# sum of digits in 100 factorial
# SOLVED

def factorial(n)
  (1..n).reduce(&:*)
end

p factorial(100).to_s.split("").reduce {|sum, n| sum.to_i + n.to_i }
