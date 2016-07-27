## Each

def scoring(array)
    array.each do |user|
        user.update_score
    end
end

## Unless

def scoring(array)
    array.each do |user|
        user.update_score unless user.is_admin?
    end
end

## Infinite Loop

loop do
    coder.practice
    break if coder.oh_one?
end

## Until

until coder.oh_one?
    coder.practice
end

## Case

def identify_class(obj)
    case obj
    when Hacker
        puts "It's a #{obj.class.to_s}!"
    when Submission
        puts "It's a #{obj.class.to_s}!"
    when TestCase
        puts "It's a #{obj.class.to_s}!"
    when Contest
        puts "It's a #{obj.class.to_s}!"
    else
        puts "It's an unknown model"
    end
end
