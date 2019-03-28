# SOLVED, 55

require 'prime'

def rotate(arr)
  first_n = digits.shift
  digits.push(first_n)
end

def find_circular_primes(max)
  circular_primes = []
  (1..max).each do |num|
    digits = num.to_s.split('').map {|n| n.to_i}
    circular_prime_count = 0
    digits.length.times do
      if Prime.prime?(digits.join.to_i)
        circular_prime_count += 1
        if circular_prime_count == digits.length
          circular_primes.push(num)
        end
      else
        break
      end
      first_n = digits.shift
      digits.push(first_n)
    end
  end
  circular_primes.length
end

p find_circular_primes(1000000)
