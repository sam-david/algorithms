# PASSED

def sorted_names_input
  file = File.open('names.txt', 'r')
  input = file.read.delete('\"').split(",").sort
end

def score_names(names)
  total_score = 0
  names.each_with_index do |name, index|
    current_score = 0
    name.each_char do |char|
      current_score += alpha_score(char)
    end
    total_score += current_score * (index + 1)
  end
  total_score
end

def alpha_score(char)
  char.ord - 'A'.ord + 1
end

p score_names(sorted_names_input)
