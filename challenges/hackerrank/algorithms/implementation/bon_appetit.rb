def bonAppetit(bill, k, b)
  items_anna_splits = []
  bill.each_with_index do |price, index|
    if index != k
      items_anna_splits.push(price)
    end
  end

  total_anna_owes = items_anna_splits.reduce(&:+) / 2

  if b - total_anna_owes == 0
    print "Bon Appetit"
  else
    p b - total_anna_owes
  end
end

p bonAppetit([3, 10, 2, 9], 1, 12)
