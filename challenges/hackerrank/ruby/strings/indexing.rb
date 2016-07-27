# https://www.hackerrank.com/challenges/ruby-strings-indexing
# PASSED

def serial_average(string)
  sss = string[0,3]
  xx = string[4,5].to_f
  yy = string[10,5].to_f
  zz = '%.2f' % ((xx + yy) / 2)
  return "#{sss}-#{zz}"
end

p serial_average('002-10.00-20.00') # "002-15.00"
