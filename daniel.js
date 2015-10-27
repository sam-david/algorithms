var Employee = function(salary) {
  this.salary = salary;
  this.reports = [];
};

var boss = new Employee(100000);
var manager1 = new Employee(75000);
manager1.reports.push(new Employee(50000));

var manager2 = new Employee(75000);
manager2.reports.push(new Employee(50000));
manager2.reports.push(new Employee(50000));

boss.reports.push(manager1);
boss.reports.push(manager2);

// Given this model of an organizational hierarchy, write a recursive
// function that can calculate the total salary of an employee and the
// hierarchy beneath them.

// e.g. total for manager2 would be 175000 (75000 + 50000 + 50000)
//      total for boss would be 400000 (sum of boss and all employees)

var totalSalary = function(employee) {
  console.log(employee);
  var total = employee.salary;
  for (var i=0;i<employee.reports.length;i++){
    total += employee.reports[i].salary;
  }
  return total;
};
// this solution only goes one deep

function totalSalary(employee) {
  if (employee.reports == []) {
    return employee.salary; 
  } else {
    var reportsSalary = 0;
    for (var i=0;i<employee.reports.length;i++) {
      reportsSalary += totalSalary(employee.reports[i]);
    }
    return employee.salary + reportsSalary;
  }
}

// refactored by daniel
function totalSalary2(employee) {
    var reportsSalary = 0;
    for (var i=0;i<employee.reports.length;i++) {
      reportsSalary += totalSalary(employee.reports[i]);
    }
    return employee.salary + reportsSalary;
}

function totalSalary(employee) {
    var reportsSalary = 0;
    for (var report in employee.reports) {
      reportsSalary += totalSalary(employee.reports[report]);
    }
    return employee.salary + reportsSalary;
}

function totalSalary4(employee) {
    var reportsSalary = 0;
    employee.reports.forEach(function(reportee) {
      reportsSalary += totalSalary4(reportee);
    })
    return employee.salary + reportsSalary;
}


console.log(totalSalary4(manager2))
console.log(totalSalary4(boss))

var input = [74, 292, 721, 4, 59, 0, 72, 8];

var sum = function(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

// sum(input); // returns 1230

// function sumRecursive(array) {
//   return array[]
// }

function arraySum(i) {
    var sum=0; // missing var added
    for(var a=0;a<i.length;a++){ // missing var added
      console.log(i[a]);
        if(typeof i[a]=="number"){
            sum+=i[a];
        }else if(i[a] instanceof Array){
            console.log('array now')
            sum+=arraySum(i[a]);
        }
    }
    return sum;
}
// Not really sure if this is actually recursivly calling

function sumRecursive(array) {  
  if (array.length === 1) {  
    console.log("last one", array[0])
    return array[0];  
  }  
  else {  
    return array.pop() + sumRecursive(array);  
  }  
};

// console.log(sumRecursive(input))

function averageLetters(array) {
  return array.map(function(name) {
    return name.length / array.length;
  }).reduce(function(a,b) {
    return a + b;
  });
}

function averageLetters(array) {
  return array.map(function(name) {
    return name.length;
  }).reduce(function(a,b) {
    return a + b;
  }) / array.length
}
// console.log(averageLetters2(['Dan', 'Sam', 'Fred']));

function longName(array) {
  return array.reduce(function(a,b) {
    if (a.length > b.length) {
      return a;
    } else {
      return b;
    }
  })
}

// console.log(longName(['Dan', 'Sam', 'Fred', 'Teddy']));


