# examine an array to see if there exists an element such that the sum on of the elments on the right is equal to the sum of the elements on the left
# arr = STDIN.readlines.to_a.map {|line| line.rstrip}
# PASSED 22.2/40
# Timed out on two of the tests because the files are huge! Arrays with 100k elements. Couldn't even load it locally
require_relative 'sherlock_and_array_data'

def sherlock(array)
  array.shift
  tests = array.each_slice(2).to_a.each {|arr| arr.shift}
  tests.each do |line|
    current_array = line[0].split(" ").map(&:to_i)
    equal_sum = false

    current_array.each_with_index do |e, index|
      # left side
      if index != 0
        left_sum = current_array[0..index - 1].reduce(&:+)
      else
        left_sum = 0
      end
      # right side
      if index != current_array.length - 1
        right_sum = current_array[index + 1..current_array.length - 1].reduce(&:+)
      else
        right_sum = 0
      end

      if left_sum == right_sum
        equal_sum = true
      end
    end

    if equal_sum
      puts "YES"
    else
      puts "NO"
    end
  end
end

sherlock(["2", "3", "1 2 3", "4", "1 2 3 3"])
