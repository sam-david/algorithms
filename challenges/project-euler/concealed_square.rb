# SOLVED, 1389019170

def find_concealed_square
  (1010101000..1389026624).each do |n|
    squared_string = (n * n).to_s
    # p "#{n}: #{squared_string}"
    if squared_string[0] == "1" && squared_string[2] == "2" && squared_string[4] == "3" && squared_string[6] == "4" && squared_string[8] == "5" && squared_string[10] == "6" && squared_string[12] == "7" && squared_string[14] == "8" && squared_string[16] == "9" && squared_string[18] == "0"
      return n
    end
  end

end

p find_concealed_square

