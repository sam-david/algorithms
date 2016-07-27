# given array of ints, calculate fraction of elements that are postive, negative, and zero

def plus_minus(array)
  postive_count = 0
  negative_count = 0
  zero_count = 0
  array.each do |num|
    if num > 0
      postive_count += 1
    elsif num < 0
      negative_count += 1
    else
      zero_count += 1
    end
  end
  puts "%0.6f" % (postive_count.round(6) / array.length.round(6))
  puts "%0.6f" % (negative_count.round(6) / array.length.round(6))
  puts "%0.6f" % (zero_count.round(6) / array.length.round(6))
end

plus_minus([-4, 3, -9, 0, 4, 1])
