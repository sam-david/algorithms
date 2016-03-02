# https://www.hackerrank.com/challenges/service-lane
# PASSED

def service_lane(lanes_array, entry, exit)
  max_width = 4
  lanes_array[entry..exit].each do |lane|
    if lane < max_width
      max_width = lane
    end
  end
  max_width
end

p service_lane([2, 3, 1, 2, 3, 2, 3, 3], 0, 3)
p service_lane([2, 3, 1, 2, 3, 2, 3, 3], 4, 6)
p service_lane([2, 3, 1, 2, 3, 2, 3, 3], 6, 7)
p service_lane([2, 3, 1, 2, 3, 2, 3, 3], 3, 5)
p service_lane([2, 3, 1, 2, 3, 2, 3, 3], 0, 7)
