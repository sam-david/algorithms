# https://www.hackerrank.com/challenges/ruby-enumerable-group-by
# PASSED

def group_by_marks(marks, pass_mark)
  results = {}
  passed = []
  failed = []
  marks.each do |name, score|
    if score > pass_mark
      passed.push([name.to_s, score])
    else
      failed.push([name.to_s, score])
    end
  end

  unless failed.empty?
    results['Failed'] = failed
  end
  unless passed.empty?
    results['Passed'] = passed
  end
  results
end

marks = {"Ramesh":23, "Vivek":40, "Harsh":88, "Mohammad":60}

p group_by_marks(marks, 30)

# => {"Failed"=>[["Ramesh", 23]], "Passed"=>[["Vivek", 40], ["Harsh", 88], ["Mohammad", 60]]}

