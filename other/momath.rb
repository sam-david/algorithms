# problem from the MoMath event put on for National Museum of Mathematics in Manhattan
# Find the smallest int such that m^2 + 7m + 89 is divisible by 77
# http://blogs.wsj.com/moneybeat/2016/03/04/are-you-smarter-than-a-quant-here-are-5-questions-from-the-momath-masters-contest/

def small_postive_int
  current_min = 1000000000
  100000.downto(1).each do |num|
    if ((num * num) + (7 * num) + 89) % 77 == 0
      current_min = num
    end
  end
  current_min
end

p small_postive_int # 18

# WSJ solution:
# Question 5: If m²+7m+89 is divisible by 77, then 77 less will also be divisible by 77. That’s m²+7m+12. That factors as (m+3)(m+4), which should be divisible by 77. Since m+3 and m+4 are consecutive numbers, we are looking for the smallest pair of consecutive numbers, one divisible by 7 and one by 11 (so that the product will be divisible by 7 times 11, which is 77.) That turns out to be 21 and 22, making m equal to 21 – 3 = 18, or option B.


