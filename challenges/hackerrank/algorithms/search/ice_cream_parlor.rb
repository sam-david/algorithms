# Find combo of two flavors based on M dollars and N flavors that end up equaling whole of M
# PASSED
# arr = STDIN.readlines.to_a.map {|line| line.rstrip}

def ice_cream_parlor(array)
  array.shift
  tests = array.each_slice(3).to_a
  tests.each do |test|
    money = test[0].to_i
    flavors = test[2].split(" ")
    flavors.each_with_index do |flavor1, index1|
      flavors.drop(index1 + 1).each_with_index do |flavor2, index2|
        if flavor1.to_i + flavor2.to_i == money
          puts "#{index1 + 1} #{index1 + index2 +  2}"
        end
      end
    end
  end
end

ice_cream_parlor(["2", "4", "5", "1 4 5 3 2", "4", "4", "2 2 4 3"])

ice_cream_parlor(["10", "100", "3", "5 75 25", "200", "7", "150 24 79 50 88 345 3", "8", "8", "2 1 9 4 4 56 90 3"])
# 2 3
# 1 4
# 4 5
