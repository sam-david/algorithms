## Reduce
# Passed
# https://www.hackerrank.com/challenges/ruby-enumerable-reduce

def sum_terms(n)
  (0..n).reduce(&:+)
end

def sum_terms(n)
  (1..n).inject(0) {|sum, n| sum += (n * n) + 1 }
end

p sum_terms(25)
