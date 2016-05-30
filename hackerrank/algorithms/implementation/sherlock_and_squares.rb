# https://www.hackerrank.com/challenges/sherlock-and-squares
# Failing because of timeout
# arr = STDIN.readlines.to_a.map {|line| line.rstrip}

def sherlock_and_squares(a, b)
  count = 0
  (a..b).each do |num|
    if isSquareInt?(num)
      count += 1
    end
  end
  count
end

def isSquareInt?(n)
  n_sqrt = Math.sqrt(n)
  n_sqrt % 1 == 0
end

# isSquareInt?(4)

p sherlock_and_squares(3,9)
p sherlock_and_squares(17, 24)
p sherlock_and_squares(465868129, 988379794)
