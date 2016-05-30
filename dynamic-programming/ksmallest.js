var kthSmallest = function(input, k){
  if (k > input.length) {
    console.log("K too large");
  }

  var result;
  k--;

  var delve = function(pullFrom, start, end) {
    var pivotIndex = Math.floor(pullFrom.length / 2);
    var pivot = pullFrom[pivotIndex];
    var before = [];
    var after = [];

    pullFrom.forEach(function(element, index) {
      if (index != pivotIndex) {
        if (element < pivot) {
          before.push(element);
        } else {
          after.push(element);
        }
      }
    })

    if (start + before.length == k) {
      result = pivot;
    } else if (start + before.length > k) {
      delve(before, start, start + before.length - 1)
    } else if (start + before.length < k) {
      delve(after, start + before.length + 1, end)
    }
  }

  delve(input, 0, input.length - 1);

  return result;
}



console.log(kthSmallest([1984, 1337, 9000, 8304, 5150, 9000, 8304], 5))


// describe('kthSmallest', function(){
//   describe('run on example input', function(){
//     it('should return the example output', function(){
//       var test = kthSmallest([1984, 1337, 9000, 8304, 5150, 9000, 8304], 5);
//       var answer = 8304;

//       expect(test).to.eql(answer);
//     });
//   });

//   describe('run on [7, 10, 4, 3, 20, 15] and k=3', function(){
//     it('should return 7', function(){
//       var test = kthSmallest([7, 10, 4, 3, 20, 15], 3);
//       var answer = 7;

//       expect(test).to.eql(answer);
//     });
//   });

//   describe('run on [7, 10, 4, 3, 20, 15] and k=4', function(){
//     it('should return 10', function(){
//       var test = kthSmallest([7, 10, 4, 3, 20, 15], 4);
//       var answer = 10;

//       expect(test).to.eql(answer);
//     });
//   });
// })
