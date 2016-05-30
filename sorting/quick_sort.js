var quickSort = function(work){
  if (work.length <= 1) {
    console.log('returning work', work)
    return work;
  }

  var pivotIndex = Math.floor(work.length / 2);
  var pivot = work[pivotIndex];

  var before = [];
  var after = [];

  for (var i = 0; i < work.length; i++) {
    if (i != pivotIndex) {
      if (work[i] <= pivot) {
        before.push(work[i]);
      } else {
        after.push(work[i]);
      }
    }
  }

  return quickSort(before).concat(pivot).concat(quickSort(after));
}

console.log(quickSort([4,3,6,9,2,1]))

// var expect = require('chai').expect;

// describe('QUICK SORT ', function(){

//   describe("RUN ON [3,9,1,4,7]: ", function(){
//     it("should return [1,3,4,7,9]", function(){
//       var test = quickSort([3,9,1,4,7]);
//       var answer = [1,3,4,7,9];

//       expect(test).to.eql(answer);
//     });
//   });

//   describe("RUN ON EMPTY INPUT []: ", function(){
//     it("should return []", function(){
//       var test = quickSort([]);
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
//       var test = quickSort(testInput);

//       expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
//     })
//   })

// });
