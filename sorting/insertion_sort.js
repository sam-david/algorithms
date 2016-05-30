var insertionSort = function(input){
  for (var i = 0; i < input.length; i++) {
    var temp = input[i];
    var pointer = i;
    while (pointer > 0 && temp < input[pointer - 1]) {
      input[pointer] = input[pointer - 1];
      pointer--;
    }
    input[pointer] = temp;
  }
  return input;
}

// var expect = require('chai').expect;

// describe('INSERTION SORT ', function(){

//   describe("RUN ON [8, 3, 2, 10]: ", function(){
//     it("should return [2, 3, 8, 10]", function(){
//       var test = insertionSort([3,9,1,4,7]);
//       var answer = [1,3,4,7,9];

//       expect(test).to.eql(answer);
//     });
//   });

//   describe("RUN ON EMPTY INPUT []: ", function(){
//     it("should return []", function(){
//       var test = insertionSort([]);
//       var answer = [];

//       expect(test).to.eql(answer);
//     });
//   });

//   describe("RUN ON LARGE INPUT: ", function(){
//     it("should complete", function(){
//       var testInput = [];
//       var i = 1000000;
//       while (i--){
//         testInput.push(Math.floor(Math.random() * 1000000))
//       }
//       var test = insertionSort(testInput);

//       expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
//     })
//   })

// });
