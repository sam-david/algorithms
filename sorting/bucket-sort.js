
var bucketSort = function(input){
  var placeIntoBuckets = function(pullFrom, lowerRange, upperRange) {
    var buckets = [[],[],[],[],[],[],[],[],[],[]];
    var division = (upperRange - lowerRange) / 10;

    pullFrom.forEach(function(value) {
      buckets[Math.floor(value / division)].push(value)
    })

    for (var i=0; i<buckets.length; i++) {
      if (buckets[i].length > 1) {
        buckets[i] = insertionSort(buckets[i])
      }
    }


    var work = [];

    buckets.forEach(function(bucket) {
      if (bucket.length > 0) {
        work = work.concat(bucket);
      }
    })
    return work;
  }

  return placeIntoBuckets(input, 0, 1);
}

console.log(bucketSort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]))

// var expect = require('chai').expect;

// describe('bucketSort', function(){
//   describe('run on example input:', function(){
//     it('should return the example output', function(){
//       var test = bucketSort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]);
//       var answer = [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897];

//       expect(test).to.eql(answer);
//     });
//   });

//   describe('run on empty array', function(){
//     it('should return an empty array', function(){
//       var test = bucketSort([]);
//       var answer = [];

//       expect(test).to.eql(answer);
//     })
//   })

//   describe('run on large array', function(){
//     it('should return a sorted array', function(){
//       var testInput = [];
//       var i = 10000;
//       while (i--){
//         testInput.push(Math.floor(Math.random() * 1000))
//       }

//       var test = bucketSort(testInput);
//       var answer = testInput.sort(function(a,b){return a-b});

//       expect(test).to.eql(answer);
//     })
//   })
// });
