var bubbleSort = function(input){
  var temp;
  var swap;
  var endIndex = input.length;
  while (endIndex--) {  // while endIndex is not 0
    swap = false;
    for (var i = 0; i < endIndex; i++) {
      if (input[i] > input[i + 1]) {
        temp = input[i];
        input[i] = input[i+ 1];
        input[i+1] = temp;
        swap = true;
      }
    }

    if (!swap) {break;}
  }
  return input;
}

// describe('BUBBLE SORT ', function(){

//   describe("RUN ON [8, 3, 2, 10]: ", function(){
//     it("should return [2, 3, 8, 10]", function(){
//       var test = bubbleSort([8,3,2,10]);
//       var answer = [2,3,8,10];

//       expect(test).to.eql(answer);
//     });
//   });

//   describe("RUN ON EMPTY INPUT []: ", function(){
//     it("should return []", function(){
//       var test = bubbleSort([]);
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
//       var test = bubbleSort(testInput);

//       expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
//     })
//   })

// });
