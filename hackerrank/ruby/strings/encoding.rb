# arr = STDIN.readlines.to_a.map {|line| line.rstrip}
# transcode which takes a ISO-8859-1 encoded string as input and convert it to a UTF-8 encoded string.

def transcode(string)
  return string.encode("iso-8859-1").force_encoding("utf-8")
end
