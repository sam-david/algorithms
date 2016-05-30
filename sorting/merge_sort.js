var joinArrays = function(arr1, arr2) {
  var p1 = 0;
  var p2 = 0;
  var result = [];
  if (arr1 === undefined) {
    return arr2;
  } else if (arr2 === undefined) {
    return arr1;
  }

  while (arr1[p1] !== undefined && arr2[p2] !== undefined) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1])
      p1++;
    } else {
      result.push(arr2[p2])
      p2++;
    }
  }

  if (p1 === arr1.length) {
    result = result.concat(arr2.slice(p2));
  } else if (p2 === arr2.length) {
    result = result.concat(arr1.slice(p1));
  }

  return result;
}

var mergeSort = function(input){
  if (input.length <= 1) {
    return input;
  }

  var midIndex = Math.floor(input.length / 2);
  var left = input.slice(0, midIndex);
  var right = input.slice(midIndex, input.length);
  console.log('midIndex', midIndex, 'left', left, 'right', right)
  return joinArrays(mergeSort(left), mergeSort(right));
}

mergeSort([4,3,6,9,2,1])


// describe('MERGE SORT ', function(){

//   describe("RUN ON [8, 3, 2, 10]: ", function(){
//     it("should return [2, 3, 8, 10]", function(){
//       var test = mergeSort([8,3,2,10]);
//       var answer = [2,3,8,10];

//       expect(test).to.eql(answer);
//     });
//   });

//   describe("RUN ON EMPTY INPUT []: ", function(){
//     it("should return []", function(){
//       var test = mergeSort([]);
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
//       var test = mergeSort(testInput);

//       expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
//     })
//   })

// });
