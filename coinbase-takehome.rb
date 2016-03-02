# given an array of unique integers and a difference,
# find how many times the declared difference occurs between pairs of numbers in the array

def JDelta(array, diff)
  count = 0
  array.each_with_index do |num1, index|
    array.drop(index).each do |num2|
      if (num1 - num2).abs == diff
        count += 1
      end
    end
  end
  count
end

def JDelta2(array, diff)
  count = 0
  array.sort
  array.each_with_index do |num, index|
    if index == array.length - 1
      break
    end
    if (num - array[index + 1]).abs == diff
      count += 1
    end
  end
  count
end

def JDelta(array, diff)
  count = 0
  array.sort
  array.each do |num|
    if array.include?(num + diff)
      count += 1
    end
  end
  count
end

p JDelta([1,4,3,7,9], 2)
p JDelta3([1,4,3,7,9], 2)
