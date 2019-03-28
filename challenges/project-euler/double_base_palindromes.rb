# SOLVED

def find_double_base_palindromes
  palindromes = []
  (1..999999).each do |n|
    if n.to_s == n.to_s.reverse && n.to_s(2) == n.to_s(2).reverse && n.to_s(2)[0] != "0"
      palindromes.push(n)
    end
  end
  p palindromes
  palindromes.reduce(:+)
end

p find_double_base_palindromes
