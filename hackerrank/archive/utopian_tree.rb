year_array = [0,1,4]

def height_finder(years)
	base = 1
	years.times do |i|
		if i % 2 == 0
			base += base
		else
			base += 1
		end 
	end
	p base
end

year_array.each do |test|
	height_finder(test)
end