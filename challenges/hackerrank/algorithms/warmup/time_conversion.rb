# Convert AM/PM time string to military time

def convert(time)
  if time[-2..-1] == 'PM' && time[0..1] != "12"
    final_hour = time[0..1].to_i + 12
    time[0..1] = final_hour.to_s
  elsif time[-2..-1] == 'AM' && time[0..1] == "12"
    time[0..1] = "00"
  end
  time.chop.chop
end

puts convert("07:05:45PM")
puts convert("12:40:22AM") # 00:40:22
puts convert("12:45:54PM") # 12:45:54
