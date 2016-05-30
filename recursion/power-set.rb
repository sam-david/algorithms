def powerSet(str)
  traverse(str, "", 0, Array.new, Hash.new)
end

def traverse(str, buildUp, depth, results, library)
  if depth == str.length
    key = buildUp.split("").sort.join("")
    if library[key].nil?
      results.push(buildUp)
      library[key] = true
    end
    return
  end
  # left
  traverse(str, buildUp, depth + 1, results, library)
  # right
  traverse(str, buildUp + str[depth], depth + 1, results, library)

  results
end

require 'test/unit'

class PowerSetTest < Test::Unit::TestCase
  def test_powerSet_should_handle_input_of_abc
    test = powerSet('abc')
    answer = ['abc','ab','ac','a','bc','b','c','']

    for i in 0..7
      assert test.include?(answer[i])
    end
    assert_equal(8, test.length)

  end

  def test_powerSet_should_handle_empty_string_input
    test = powerSet('')

    assert_equal('', test[0])
    assert_equal(1, test.length)
  end

  def test_powerSet_should_handle_duplicate_characters_in_input
    test = powerSet('abca')
    answer = ['','a','c','ca','b','ba','bc','bca','aa','ac','aca','ab','aba','abc','abca']

    for i in 0..14
      assert test.include?(answer[i])
    end
    assert_equal(answer.length, test.length)
  end
end
