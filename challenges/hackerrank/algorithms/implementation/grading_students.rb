# Given a list of grades, round up grades to nearest multiple of 5 if within 3
# If less than 40, do not round

def gradingStudents(grades)
  result_grades = []
  grades.each do |grade|
    if grade < 38
      result_grades.push(grade)
    else
      rounded_grade = up_to_nearest_5(grade)
      if rounded_grade - 2 <= grade
        result_grades.push(rounded_grade)
      else
        result_grades.push(grade)
      end
    end
  end

  result_grades
end

def up_to_nearest_5(n)
  return n if n % 5 == 0
  rounded = n.round(-1)
  rounded > n ? rounded : rounded + 5
end

grades = [73, 67, 38, 33]

p gradingStudents(grades)
