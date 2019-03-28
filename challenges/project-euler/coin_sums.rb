# SOLVED
# http://stackoverflow.com/questions/1106929/find-all-combinations-of-coins-when-given-some-dollar-value
# https://andrew.neitsch.ca/publications/m496pres1.nb.pdf

def count_change(money, coins)
  p "Money: #{money} Coins: #{coins}"
  if money == 0
    1
  elsif coins.empty? || money < 0
    0
  else
    head, *tail = coins
    count_change(money - head, coins) + count_change(money, tail)
  end
end

# p count_change(200, [1, 2, 5, 10, 20, 50, 100, 200])
p count_change(34, [1, 5, 10, 25])
