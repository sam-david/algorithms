# SOLVED 25/25

def query_strings(strings_queries)
  strings_end = strings_queries.shift.to_i - 1
  strings = strings_queries[0..strings_end]
  queries = strings_queries[strings_end + 2..-1]
  strings_count = Hash.new(0)
  strings.each do |string|
    strings_count[string] += 1
  end
  queries.each do |query|
    p strings_count[query]
  end
end

query_strings(["4", "aba", "baba", "aba", "xzxb", "3", "aba", "xzxb", "ab"])
