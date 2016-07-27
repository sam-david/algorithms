def fifth_powers
  matches = []

  (2..1000000).each do |num|
    current_digits = num.to_s.split("").map(&:to_i)
    current_total = 0
    current_digits.each do |digit|
      current_total += (digit ** 5)
    end
    if current_total == num
      p "MATCH #{num} == current_total"
      matches.push(num)
    end
  end
  p matches
  matches.reduce(:+)
end

p fifth_powers
