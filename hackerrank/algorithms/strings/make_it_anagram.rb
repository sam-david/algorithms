# https://www.hackerrank.com/challenges/make-it-anagram
# given two strings, return how many characters need to be deleted before they are anagrams
# arr = STDIN.readlines.to_a.map {|line| line.rstrip}

class String
  def intersection(other)
    str = self.dup
    other.split(//).inject(0) do |sum, char|
      sum += 1 if str.sub!(char,'')
      sum
    end
  end
end

def make_it_anagram(string1, string2)
  string1_array = string1.split("")
  string2_array = string2.split("")
  p string1_deletions = string1_array - string2_array
  p string2_deletions = string2_array - string1_array
  p (string1_array.length + string2_array.length) - (string1_array & string2_array).length
  string1_deletions.length + string2_deletions.length
end

# def make_it_anagram(string1, string2)
#   common_char_count = string1.intersection(string2)
#   string1.length + string2.length - common_char_count
# end

p make_it_anagram("cde", 'abc') # 4

p make_it_anagram("fcrxzwscanmligyxyvym",
"jxwtrhvujlmrpdoqbisbwhmgpmeoke") # 30

p make_it_anagram("bugexikjevtubidpulaelsbcqlupwetzyzdvjphn",
"lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk") # 40
