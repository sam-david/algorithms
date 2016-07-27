class Array
  def my_map(&block) # { |i| i*i }
    result = []
    self.each do |val|
      result.push(block.call(val))
    end
    return result
  end

  def my_map_inject(&block)
    self.inject([]) do |arr, n|
      arr.push(block.call(n))
    end
  end
end


puts [1,2,3,4].my_map_inject {|i| i*i }.inspect
