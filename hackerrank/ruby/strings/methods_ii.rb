# https://www.hackerrank.com/challenges/ruby-strings-methods-ii

def strike(string)
  "<strike>#{string}</strike>"
end

def mask_article(string, array)
  array.each do |word|
    if string.include?(word)
      string = string.gsub(/#{word}/, strike(word))
    end
  end
  string
end

mask_article("Decisively advantages nor expression unpleasing she led met", ["unpleasing"])
