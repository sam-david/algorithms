# PASSED 15/15
def energy_count(cloud_path_array, k_value)
  current_index = 0
  first_run = true
  current_energy = 100
  until current_index == 0 && first_run == false
    current_energy -= 1
    first_run = false
    current_index = (current_index + k_value) % cloud_path_array.length
    if cloud_path_array[current_index] == 1
      current_energy -= 2
    end
  end
  current_energy
end


p energy_count([0, 0, 1, 0, 0, 1, 1, 0], 2)
