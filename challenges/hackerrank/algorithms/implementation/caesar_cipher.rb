# https://www.hackerrank.com/challenges/caesar-cipher-1
# PASSED

def caesar_cipher(string, k)
  final_string = ""
  string.each_char do |char|
    if /[[:lower:]]/.match(char)
      final_string += transpose_lowercase(char, k)
    elsif /[[:upper:]]/.match(char)
      final_string += transpose_uppercase(char, k)
    else
      final_string += char
    end
  end
  final_string
end

def transpose_lowercase(value, k)
  k = k % 26 if k > 26
  alpha1 = "abcdefghijklmnopqrstuvwxyz"
  alpha2 = alpha1[k..-1].concat(alpha1.slice(0,k))
  return value.tr(alpha1, alpha2)
end

def transpose_uppercase(value, k)
  k = k % 26 if k > 26
  alpha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  alpha2 = alpha1[k..-1].concat(alpha1.slice(0,k))
  return value.tr(alpha1, alpha2)
end

p caesar_cipher("middle-Outz", 2) #

p caesar_cipher("www.abc.xy", 87) # fff.jkl.gh
