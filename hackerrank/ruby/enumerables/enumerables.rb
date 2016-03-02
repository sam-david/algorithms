## Introduction

def iterate_colors(colors)
    array = []
    colors.each do |color|
        array.push(color)
    end
    array
end

## each_with_index

def skip_animals(animals, skip)
    array = []
    animals.each_with_index do |animal, index|
        if index + 1 > skip
            array.push("#{index}:#{animal}")
        end
    end
    array
end



## Any, All, None, Find
# PASSED

def func_any(hash)
    # Check and return if any key object within the hash is of the type Integer
    hash.each do |k,v|
        if k.is_a? Integer
            return true
        end
    end
    return false
end

def func_all(hash)
    # Check and return if all the values within the hash are Integers and are < 10
    all_ints = true
    hash.each do |k, v|
      if v >= 10 || !v.is_a?(Integer)
        all_ints = false
      end
    end
    return all_ints
end

def func_none(hash)
    # Check and return if none of the values within the hash are nil
    hash.each do |k, v|
      if v == nil
        return false
      end
    end
    return true
end

def func_find(hash)
    # Check and return the first object that satisfies the property
    # [key, value] pair where the key is an Integer and the value is < 20
    # or [key, value] pair where the key is a String and the value is a String starting
    # with the character `a`
    hash.each do |k, v|
      if k.is_a?(Integer) && v.is_a?(Integer) && v < 20
          return [k, v]
      end
      if k.is_a?(String) && v.is_a?(String) && v[0] == 'a'
          return [k, v]
      end
    end
end
