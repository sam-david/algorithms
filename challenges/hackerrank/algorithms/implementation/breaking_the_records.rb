# given an array of scores, count how many times the max and min score are replaced

def breakingRecords(scores)
  min = scores.first
  max = scores.first
  max_reached = 0
  min_reached = 0

  scores.each do |score|
    if score > max
      p "Max reached #{score}"
      max = score
      max_reached += 1
    end

    if score < min
      p "Min reached #{score}"
      min = score
      min_reached += 1
    end
  end

  return [max_reached, min_reached]
end

p breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
p breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])
