# side effects
def lattice_paths(n, x = 0, y = 0)
  if x == n && y == n
    return 1
  elsif x > n || y > n
    return 0
  end

  lattice_paths(n, x + 1, y) + lattice_paths(n, x, y + 1)
end

# pure

def lattice_paths(x, y)
  if x == 0 && y == 0
    return 1
  elsif x < 0 || y < 0
    return 0
  end

  lattice_paths(x - 1, y) + lattice_paths(x, y - 1)
end

# require 'test/unit'

# class LatticePathsTest < Test::Unit::TestCase

#   def test_small_lattice_2
#     puts ': input 2 should expect 6'
#     test = latticePaths(2)
#     answer = 6

#     assert_equal(answer, test)
#   end

#   def test_small_lattice_1
#     puts ': input 1 should expect 2'
#     test = latticePaths(1)
#     answer = 2

#     assert_equal(answer, test)
#   end

#   def test_small_lattice_3
#     puts ': input 3 should expect 20'
#     test = latticePaths(3)
#     answer = 20

#     assert_equal(answer, test)
#   end

#   def test_large_lattice_20
#     puts ': input 20 should expect 137846528820'
#     test = latticePaths(20)
#     answer = 137846528820

#     assert_equal(answer, test)
#   end

#   def test_edge_case_lattice_0
#     puts ': input 0 should expect 1'
#     test = latticePaths(0)
#     answer = 1

#     assert_equal(answer, test)
#   end

# end
