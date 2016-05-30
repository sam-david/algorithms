var maxConsecutiveSum = function(input){
  // your work here
  var localMax = input[0];
  var ultimateMax = input[0];

  for (var i=0; i<input.lenght; i++) {
    localMax = Math.max(localMax + input[i], input[i])

    ultimateMax = Math.max(localMax, ultimateMax)
  }

  return ultimateMax;
};

// var expect = require('chai').expect;

// describe('maxConsecutiveSum FUNCTION ', function() {

//   describe("RUN ON [6, -1, 3, 5, -10]: ", function () {
//     it("should return 13", function () {
//       var test = maxConsecutiveSum([6, -1, 3, 5, -10]);
//       var answer = 13

//       expect(test).to.eql(test);
//     });
//   });

//   describe("RUN ON [5]: ", function () {
//     it("should return 5", function () {
//       var test = maxConsecutiveSum([5]);
//       var answer = 5

//       expect(test).to.eql(test);
//     });
//   });
