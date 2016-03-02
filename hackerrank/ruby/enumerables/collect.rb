## Collect
# Passed

def rot13(string)
  final_string = []
  string.each do |line|
    current_line = ""
    line.each_char do |char|
      if /[[:lower:]]/.match(char)
        current_line += rot13_lowercase(char)
      elsif /[[:upper:]]/.match(char)
        current_line += rot13_uppercase(char)
      else
        current_line += char
      end
    end
    final_string.push(current_line)
  end
  final_string
end

def rot13_lowercase(value)
  return value.tr("abcdefghijklmnopqrstuvwxyz",
  "nopqrstuvwxyzabcdefghijklm")
end

def rot13_uppercase(value)
  return value.tr("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "NOPQRSTUVWXYZABCDEFGHIJKLM")
end

puts rot13(["qrygn", "zrrg ng pubpbyngr pbeare", "gra zra", "gjb onpxhc grnzf", "zvqavtug rkgenpgvba"])


# p rot13("Gb trg gb gur bgure fvqr!")


# OLD CODE

# def step(c, delta=1)
#   [c.ord + delta].pack 'U'
# end

# def increment(c)
#   step c, 1
# end

# def decrement(c)
#   step c, -13
# end

# def rot13(secret_messages)
#   lower_alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
#   upper_alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
#   final_message = []
#   secret_messages.split(" ").each do |word|
#     new_word = ""
#     word.split("").each do |letter|
#       if !lower_alphabet.index(letter).nil?
#         new_word += lower_alphabet[lower_alphabet.index(letter) - 13]
#       elsif !upper_alphabet.index(letter).nil?
#         new_word += upper_alphabet[upper_alphabet.index(letter) - 13]
#       else
#         new_word += letter
#       end
#     end
#     final_message.push(new_word)
#   end
#   final_message.join(" ")
# end
