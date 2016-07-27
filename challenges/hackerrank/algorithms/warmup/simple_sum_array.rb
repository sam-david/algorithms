require 'benchmark'

# sum elements of an array
def simple_sum(array)
  array.reduce(&:+)
end

def simple_sum2(array)
  total = 0
  array.each do |num|
    total += num
  end
  total
end

time = Benchmark.measure do
  simple_sum([1, 2, 3, 4, 10, 11])
end

puts "Time elapsed #{time*1000} milliseconds"

time2 = Benchmark.measure do
  simple_sum2([1, 2, 3, 4, 10, 11])
end

puts "Time elapsed #{time2*1000} milliseconds"
