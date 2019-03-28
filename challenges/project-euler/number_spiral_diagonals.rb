# SOLVED

def sum_diagonals(grid_size)
  diagonal_values = [1]
  increment = 2

  until diagonal_values[-1] == (grid_size * grid_size)
    4.times do
      diagonal_values.push(diagonal_values[-1] + increment)
    end
    increment += 2
  end

  diagonal_values.reduce(:+)
end

p sum_diagonals(1001)
