# https://www.hackerrank.com/challenges/ruby-methods-keyword-arguments
# PASSED

def convert_temp(temp, input_scale: 'fahrenheit', output_scale: 'celsius')
  if input_scale == 'kelvin' && output_scale == 'celsius'
    final_temp = temp - 273.15
  elsif input_scale == 'fahrenheit' && output_scale == 'celsius'
    final_temp = (temp - 32) / 1.8
  elsif input_scale == 'fahrenheit' && output_scale == 'kelvin'
    final_temp = (temp - 32) / 1.8 + 273.15
  end
  final_temp
end

p convert_temp(0, input_scale: 'kelvin', output_scale: 'celsius') # -273.15
p convert_temp(393, input_scale: 'kelvin', output_scale: 'celsius') # 119.85
p convert_temp(400, input_scale: 'fahrenheit', output_scale: 'celsius') # 204.44
p convert_temp(333, input_scale: 'fahrenheit', output_scale: 'kelvin') # 440.372
