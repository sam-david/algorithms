def catAndMouse(x, y, z)
  cat_a_d = (z - x).abs
  cat_b_d = (z - y).abs

  if cat_a_d < cat_b_d
    p "Cat A"
  elsif cat_b_d < cat_a_d
    p "Cat B"
  elsif cat_b_d == cat_a_d
    p "Mouse C"
  end
end

catAndMouse(1, 2, 3)
catAndMouse(1, 3, 2)
