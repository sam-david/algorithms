# https://www.hackerrank.com/challenges/two-strings
# arr = STDIN.readlines.to_a.map {|line| line.rstrip}
# PASSED

def two_strings(string1, string2)
  if (string1.split("") & string2.split("")).length > 0
    p "YES"
  else
    p "NO"
  end
end

arr.shift
tests = arr.each_slice(2)
tests.each do |test|
  two_strings(test[0],test[1])
end

two_strings("hello","world")
two_strings("hi","world")
