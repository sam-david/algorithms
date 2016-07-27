# PASSED

def score_triplets(trip_set1, trip_set2)
  set1_score = 0
  set2_score = 0
  if trip_set1[0] > trip_set2[0]
    set1_score += 1
  elsif trip_set1[0] < trip_set2[0]
    set2_score += 1
  end
  if trip_set1[1] > trip_set2[1]
    set1_score += 1
  elsif trip_set1[1] < trip_set2[1]
    set2_score += 1
  end
  if trip_set1[2] > trip_set2[2]
    set1_score += 1
  elsif trip_set1[2] < trip_set2[2]
    set2_score += 1
  end
  puts "#{set1_score} #{set2_score}"
end
