# https://leetcode.com/problems/valid-sudoku/

# Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

# The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

def is_valid_sudoku(board)
  transposed_board = board.transpose
  board.each_with_index do |row, r_index|
    row.each_with_index do |cell, c_index|
      # check row
      # check column
      if !check_row(row, cell, c_index) || !check_row(transposed_board[c_index], cell, r_index)
        p "False at: #{cell}, #{r_index}, #{c_index}"
        return false
      end
    end
  end
  return true
end

def check_row(row, original_value, original_index)
  row.each_with_index do |cell, i|
    if cell == original_value && i != original_index
      p "false at: #{cell} #{i}"
      return false
    end
  end
  return true
end

def check_column()
end

p is_valid_sudoku([[".", "8", "7", "6", "5", "4", "3", "2", "1"], ["2", ".", ".", ".", ".", ".", ".", ".", "."], ["3", ".", ".", ".", ".", ".", ".", ".", "."], ["4", ".", ".", ".", ".", ".", ".", ".", "."], ["5", ".", ".", ".", ".", ".", ".", ".", "."], ["6", ".", ".", ".", ".", ".", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."], ["8", ".", ".", ".", ".", ".", ".", ".", "."], ["9", ".", ".", ".", ".", ".", ".", ".", "."]])


