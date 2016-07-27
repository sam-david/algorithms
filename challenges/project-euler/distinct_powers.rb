def distinct_powers(n)
  powers_array = []
  (2..n).each do |num1|
    power_row = []
    (2..n).each do |num2|
      power_row.push([num1, num2])
    end
    powers_array.push(power_row)
  end
  results = Hash.new(false)
  powers_array.each do |row|
    row.each do |set|
      current_power = set[0] ** set[1]
      if results[current_power] == false
        results[current_power] = true
      end
    end
  end
  results.length
end

p distinct_powers(100)
