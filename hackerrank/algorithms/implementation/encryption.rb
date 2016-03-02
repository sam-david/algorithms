# https://www.hackerrank.com/challenges/encryption
# PASSED

def encrypt(string)
  string = string.gsub(" ","")
  columns = Math.sqrt(string.length).ceil
  rows = string.chars.each_slice(columns).map(&:join)
  grid = rows.map {|e| e.split("")}
  final_grid = {}
  grid.each do |line|
    line.each_with_index do |char, index|
      if final_grid[index].nil?
        final_grid[index] = char
      else
        final_grid[index] += char
      end
    end
  end
  final_string = []
  final_grid.each do |_row, string|
    final_string.push(string)
  end
  final_string.join(" ")
end

p encrypt("if man was meant to stay on the ground god would have given us roots") # imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
p encrypt("haveaniceday") # hae and via ecy
encrypt("feedthedog") # fto ehg ee dd
encrypt("chillout") # clu hlt io
