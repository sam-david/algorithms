# https://www.hackerrank.com/challenges/ruby-strings-methods-i
# arr = STDIN.readlines.to_a.map {|line| line.rstrip}

def process_text(array)
  final_array = []
  array.each do |line|
    final_array.push(
      line.strip
    )
  end
  final_array.join(" ")
end

process_text(["Hi, \n", " Are you having fun?    "])
