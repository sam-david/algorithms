# https://projecteuler.net/problem=34
#SOLVED, 40730

def factorial(n)
  answer = 1
  while n > 0
    answer += answer * (n - 1)
    n -= 1
  end
  answer
end

def find_digit_factorials
  factorials = []

  (10..1000000).each do |num|
    sum = 0
    digits = num.to_s.split('').map { |n| n.to_i }
    digits.each do |d|
      sum += factorial(d)
    end

    if sum == num
      factorials.push(num)
    end
  end

  factorials.reduce(:+)
end

p find_digit_factorials
