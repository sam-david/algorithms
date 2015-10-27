// Chapter 3

function customMin(v1,v2) {
  if (v1 < v2) {
    return v1;
  } else {
    return v2;
  }
}

// console.log(customMin(0,10))
// console.log(customMin(0,-10))

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else if (num < 0) {
    return isEven(Math.abs(num));
  } else {
    return isEven(num - 2);
  }
}

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

function countChar(string,char) {
  var count = 0;
  for (var i=0;i<string.length;i++) {
    if (string.charAt(i) == char) {
      count++;
    }
  }
  return count;
}

// console.log(countChar("kakkerlak", "k"));

function range(start,end,step) {
  var array = []
  if (typeof(step)==='undefined') step = 1;
  if (start < end) {
    for (var i=start;i<=end;i+=step) {
      console.log(i)
      array.push(i);
    }
  } else {
    for (var i=start;i>=end;i+=step) {
      console.log(i)
      array.push(i);
    }
  }
  return array;
}

function sum(array) {
  var totalSum = 0;
  for (var i=0;i<array.length;i++) {
    totalSum += array[i]
  }
  return totalSum;
}

// console.log(sum(range(1,10)));
// console.log(range(5, 2, -1));

function reverseArray(array) {
  var finalArray = []
  for (var i=array.length-1;i>=0;i--) {
    finalArray.push(array[i])
  }
  return finalArray;
}

function reverseArrayInPlace(array) {
  for (var i=0;i<Math.floor(array.length/2);i++) {
    var temp = array[array.length-1-i];
    array[array.length-1-i] = array[i];
    console.log(array[i],temp)
    array[i] = temp;
  }
  return array;
}

// console.log(reverseArray(["A", "B", "C"]));
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

function arrayToList(array) {
  var list = null
  for (var i=array.length-1;i>=0;i--) {
    var tempList = {}
    tempList.value = array[i]
    tempList.rest = list
    list = tempList
    // list.value = array[i]
    // list.rest = 
  }
  return list;
}

// console.log(arrayToList([10, 20]));

function listToArray(list) {
  var finalArray = []
  for (var node = list;node;node = node.rest) {
    finalArray.push(node.value)
  }
  return finalArray;
}

// console.log(listToArray(arrayToList([10, 20, 30])));

function nth(list,element) {
  if (element == 0 ) {return list.value }
    console.log(list.rest,element)
  return nth(list.rest,element-1)
}

// console.log(nth(arrayToList([10, 20, 30]), 1));

// Chapter 5

var flattenArrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
  return array.reduce(function(a,b) {
    console.log(a,b);
    return a.concat(b);
  })
}

// console.log(flatten(flattenArrays))
// works like a boss

var ancestryArray = require('./ancestry_data')

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
// used for lookup
var byName = {};
ancestryArray.forEach(function(person) {
  byName[person.name] = person;
});

var ageDiffs = []

// find diff for each mother that exists in data
ancestryArray.forEach(function(person) {
  if (byName[person.mother] != undefined) {
    ageDiffs.push(person.born - byName[person.mother].born)
  }
})

// console.log(average(ageDiffs))
// works!

var centuries = {};

// first compile each century into an array of ages
ancestryArray.forEach(function(person) {
  var currentCentury = Math.ceil(person.died / 100)
  if (centuries[currentCentury] === undefined) {
    centuries[currentCentury] = [];
  }
  centuries[currentCentury].push(person.died - person.born);
})

var averageAges = {}

// take those century arrays and average them
for (century in centuries) {
  averageAges[century] = average(centuries[century])
}

// console.log(averageAges)
// works!

// Every and Then Some

function every(array, test) {
  // Interesting this did not work below because the return does not break out of the entire function when returning false, therfore will always return true if done this way.
  // array.forEach(function(element) {
  //   if (test(element) != true) {
  //     return false;
  //   }
  // })
  for (var i=0;i<array.length;i++){
    if (test(array[i]) != true) {
      return false;
    }
  }
  return true;
}

function some(array, test) {
  for (var i=0;i<array.length;i++){
    if (test(array[i]) === true) {
      return true;
    }
  }
  return false;
}

// console.log(every([NaN, NaN, NaN], isNaN));
// // → true
// console.log(every([NaN, NaN, 4], isNaN));
// // → false
// console.log(some([NaN, 3, 4], isNaN));
// // // → true
// console.log(some([2, 3, 4], isNaN));
// // → false

// Chapter 6

function Vector(x,y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  xSum = this.x + vector.x;
  ySum = this.y + vector.y;
  return new Vector(xSum,ySum);
}

Vector.prototype.minus = function(vector) {
  xDiff = this.x - vector.x;
  yDiff = this.y - vector.y;
  return new Vector(xDiff,yDiff);
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() { 
    return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2)) 
  }
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));

console.log(new Vector(1, 2).minus(new Vector(2, 3)));

console.log(new Vector(3, 4).length);

