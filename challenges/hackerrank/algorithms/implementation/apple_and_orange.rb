# COMPLETE 10/10

# House (s,t)
s = 2
t = 3
# apple tree
a = 1
# orange tree
b = 5

apple_hit_count = 0
orange_hit_count = 0

apple_falls = [2]
orange_falls = [-2]

apple_falls.each do |d|
  fall_position = a + d
  if fall_position.between?(s,t)
    apple_hit_count += 1
  end
end

orange_falls.each do |d|
  fall_position = b + d
  if fall_position.between?(s,t)
    orange_hit_count += 1
  end
end

p apple_hit_count
p orange_hit_count
