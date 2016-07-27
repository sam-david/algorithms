# https://www.hackerrank.com/challenges/chocolate-feast
require 'pry'

def chocolate_feast(money, price, discount)
  purchased = (money / price).floor
  if purchased / discount >= 1
    free = (purchased / discount).floor
    if (free + purchased / discount).floor > free
      p "whoops"
      binding.pry
      free += (free + purchased / discount).floor - free
    end
    return purchased + free
  end
  return purchased
end

def chocolate_feast(money, price, discount)
  # total_wrappers = money / price
  total_chocolates = money / price
  total_wrappers = total_chocolates
  p total_free = total_wrappers / discount
  total_wrappers = total_wrappers % discount + total_free
  # total_wrappers =total_wrappers / discount
end

p chocolate_feast(10,2,5)
p chocolate_feast(12,4,4)
p chocolate_feast(6,2,2)
