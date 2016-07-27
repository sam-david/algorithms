## Blocks

def factorial(n)
  answer = 1
  while n > 0
    answer += answer * (n - 1)
    n -= 1
  end
  p answer
end

# factorial(5)

## Procs

def square_of_sum (my_array, proc_square, proc_sum)
    sum = proc_sum.call(my_array)
    proc_square.call(sum)
end

proc_sum_array = proc { |array|
  sum = 0
  array.each do |n|
    sum += n
  end
  sum
}
proc_square_number = proc { |number|
  number * number
}
my_array = [1, 2, 3]

# puts square_of_sum(my_array, proc_square_number, proc_sum_array)

## Lambdas

# Write a lambda which takes an integer and square it
square = lambda { |number|
  number * number
}

# Write a lambda which takes an integer and increment it by 1
plus_one = lambda { |number|
  number + 1
}

# Write a lambda which takes an integer and multiply it by 2
into_2 = lambda { |number|
  number * 2
}

# Write a lambda which takes two integers and adds them
adder = lambda { |int1,int2|
  int1 + int2
}

# Write a lambda which takes a hash and returns an array of hash values
values_only = lambda { |hash|
  values = []
  hash.each do |k,v|
    values.push(v)
  end
  values
}


# input_number_1 = gets.to_i
# input_number_2 = gets.to_i
# input_hash = eval(gets)

# a = square.(input_number_1); b = plus_one.(input_number_2);c = into_2.(input_number_1);
# d = adder.(input_number_1, input_number_2);e = values_only.(input_hash)

# p a; p b; p c; p d; p e

## Closures

def block_message_printer
    message = "Welcome to Block Message Printer"
    if block_given?
        yield
    end
  puts "But in this function/method message is :: #{message}"
end

message = "test"
# block_message_printer { puts "This message remembers message :: #{message}" }

#####################################################################################

def proc_message_printer(my_proc)
    message = "Welcome to Proc Message Printer"
    my_proc.call
    puts "But in this function/method message is :: #{message}"
end


my_proc = proc { puts "This message remembers message :: #{message}" }
# proc_message_printer(my_proc)

######################################################################################

def lambda_message_printer(my_lambda)
    message = "Welcome to Lambda Message Printer"
    my_lambda.call
    puts "But in this function/method message is :: #{message}"
end

my_lambda = -> { puts "This message remembers message :: #{message}" }
# lambda_message_printer(my_lambda)

######################################################################################

## Partial Applications

# combination = -> (number) do
#   -> (another_number) do
#     number + another_number
#   end
# end

combination = -> (n) do
  -> (k) do
    (n(n - 1) * (n - k + 1)) / k(k - 1) * 1
  end
end

# n = 4
# r = 2
# nCr = combination.(n)
# puts nCr.(r)

# Wrong answer. most not be how you do combination

## Currying

power_function = -> (x, z) {
  (x) ** z
}

# base = gets.to_i
# raise_to_power = power_function.curry.(base)

# power = gets.to_i
# puts raise_to_power.(power)



## Lazy Evaluation

require 'prime'
palindromic_primes = -> (n) do
    1.upto(Float::INFINITY).lazy.select do |x|
      Prime.prime?(x) && x == x.to_s.reverse.to_i
    end.first(n)
end

puts palindromic_primes.(5)

# For some reason printing nums on separate lines
