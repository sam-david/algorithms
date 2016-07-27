# PASSED 15/15
# arr = STDIN.readlines.to_a.map {|line| line.rstrip}
require_relative 'dynamic_array_data'
require 'pry'

def dynamic_sequence(sequences_array)
  sequences_array = sequences_array.map {|seq| seq.split(" ").map(&:to_i) }
  n_value = sequences_array[0][0]
  sequences_array.shift
  sequence_solutions = Hash.new
  last_answer = 0
  sequences_array.each do |sequence|
    query, x, y = sequence[0], sequence[1], sequence[2]
    current_sequence = (x ^ last_answer) % n_value
    if query == 1
      if sequence_solutions[current_sequence].nil?
        sequence_solutions[current_sequence] = [y]
      else
        sequence_solutions[current_sequence].push(y)
      end
    elsif query == 2
      current_index = y % sequence_solutions[current_sequence].length
      p last_answer = sequence_solutions[current_sequence][current_index]
    end
  end
end

# dynamic_sequence(["2 5", "1 0 5", "1 1 7", "1 0 3", "2 1 0", "2 1 1"])

dynamic_sequence(test_input_one)
