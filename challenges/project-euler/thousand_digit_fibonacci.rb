# SOLVED, 4782

def fibonacci(n)
  results = [1,1]
  current_index = 2
  if n < current_index + 1
    results[n - 1]
  end

  until results.length == n
    results.push(results[current_index - 1] + results[current_index - 2])
    current_index += 1
  end

  results[-1]
end

p fibonacci(12)



3.upto(Float::INFINITY).lazy.select do |num|
  if fibonacci(num).to_s.length == 1000
    p num
    break
  end
end.first(1000000000)
