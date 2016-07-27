# Create a partial for combination formula
# http://www.mathwords.com/c/combination_formula.htm
# PASSED

def factorial(n)
  (1..n).reduce(&:*)
end

# (n * (n - 1) * (n - 2) ... (n - r + 1)) / factorial(r)
combination = -> (n) do
  -> (r) do
    numerator = 1
    if n > n-r+1
      # p "#{n-1} - #{n-r+1}"
      (n).downto(n - r + 1) do |num|
        numerator *= num
      end
    else
      numerator = n
    end
    denominator = factorial(r)
    numerator / denominator
  end
end

nCr = combination.(4)
p nCr.(2) # => 6

nCr = combination.(15)
p nCr.(4) # => 1365

nCr = combination.(5)
p nCr.(3) # => 10

nCr = combination.(5)
p nCr.(1) # => 5

p factorial(2)
