require 'prime'

# p Prime.prime?((3 * 3) + 3 + 41)

def find_quadratic_prime
  prime_max = 0
  max_values = {}
  (-1000..1000).each do |a|
    p "==========="
    p "a: #{a}"
    p "==========="
    (-1000..1000).each do |b|
      p "b: #{b}" if b % 100 == 0
      prime_count = 0
      (0..1000).each do |n|
        if Prime.prime?((n ** 2) + (a * n) + b)
          prime_count += 1
        end
      end

      if prime_count > prime_max
        max_values[:a] = a
        max_values[:b] = b
      end
    end
  end
  p max_values
  max_values[:a] * max_values[:b]
end

p find_quadratic_prime
