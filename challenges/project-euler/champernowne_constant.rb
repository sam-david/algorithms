# SOLVED, 210

def solve
  digits = []
  (1..500000).each do |n|
    digits.push(n.to_s.split('').map {|n| n.to_i})
  end
  digits = digits.flatten

  digits[1-1] * digits[10-1] * digits[100-1] * digits[1000 - 1] * digits[10000 - 1] * digits[100000 - 1] * digits[1000000 - 1]
end

p solve
