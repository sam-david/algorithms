# draw a staircase, going opposite direction

def draw_staircase(steps)
  count = 1
  steps.times do
    p "#" * count
    count += 1
  end
end

draw_staircase(6)

def draw_staircase_flipped(steps)
  count = 1
  steps.times do
    str = " " * (steps - count)
    str += "#" * count
    puts str
    count += 1
  end
end

draw_staircase_flipped(6)
