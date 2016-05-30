// Helper Method Recursion

var latticePaths = function(n){
  var count = 0;

  var traverse = function(x, y) {
    if (x === n && y === n) {
      count++;
      return;
    } else if (x > n || y > n){
      return;
    }

    traverse(x + 1, y);
    traverse(x, y + 1);
  }

  traverse(0, 0);
  return count;
}

// Side Effects

var latticePaths = function(n, x, y) {
  if (x === undefined) {
    x = 0;
    y = 0;
  }

  if (x === n && y === n) {
    return 1;
  } else if (x > n || y > n) {
    return 0;
  }

  return latticePaths(n, x + 1, y) + latticePaths(n, x, y + 1)
}

console.log(latticePaths(5))

// Pure Recursion

// var latticePaths = function(x, y) {
//   if (x === 0 && y === 0) {
//     return 1;
//   } else if (x < 0 || y < 0) {
//     return 0;
//   }

//   return latticePaths(x - 1, y) + latticePaths(x, y - 1);
// }

// var expect = require('chai').expect;

// describe('latticePaths function', function(){

//   describe('RUN ON n=2', function(){
//     it('should return 6', function(){
//       var test = latticePaths(2);
//       var answer = 6;
//       expect(test).to.equal(answer);
//     });
//   });

//   describe('RUN ON n=1', function(){
//     it('should return 2', function(){
//       var test = latticePaths(1);
//       var answer = 2;
//       expect(test).to.equal(answer);
//     });
//   });

//   describe('RUN ON n=3', function(){
//     it('should return 20', function(){
//       var test = latticePaths(3);
//       var answer = 20;
//       expect(test).to.equal(answer);
//     });
//   });

//   describe('LARGE CASE: RUN ON n=20', function(){
//     it('should return 137846528820', function(){
//       var test = latticePaths(20);
//       var answer = 137846528820;
//       expect(test).to.equal(answer);
//     });
//   });

//   describe('EDGE CASE: RUN ON n=0', function(){
//     it('should return 1', function(){
//       var test = latticePaths(0);
//       var answer = 1;
//       expect(test).to.equal(answer);
//     });
//   });

// });
