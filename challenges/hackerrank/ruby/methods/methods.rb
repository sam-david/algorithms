## Introduction
# Passed

def prime?(number)
  if number == 1
    return false
  end

  (2..number - 1).each do |num|
      if number % num == 0
          return false
      end
  end
  return true
end

p prime?(1) # false
p prime?(2) # true
p prime?(7) # true
p prime?(18) # false
p prime?(97) # true
p prime?(171) # false

## Arguments

def take(array, index = 1)
  array[index..array.length - 1]
end

## Variable Arguments

def full_name(first, *rest)
  rest.each do |name|
    first << " #{name}"
  end
  first
end

# p full_name('Harsha', 'Bhogle')
# p full_name('Pradeep', 'Suresh', 'Satyanarayana')

