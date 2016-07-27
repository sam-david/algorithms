# PASSED 20/20

def count_students(arrivals, late_limit)
  late_count = 0
  arrivals.each do |arrival|
    if arrival > 0
      late_count += 1
    end
  end
  arrivals.length - late_count < late_limit ? "YES" : "NO"
end

p count_students([-1, -3, 4, 2], 3)
p count_students([0, -1, 2, 1], 2)
