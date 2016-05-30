var selectionSort = function(input){
  for (var i = 0; i < input.length; i++) {
    var min = input[i];
    var minIndex = i;
    console.log('min', min, 'minIndex', minIndex)
    for (var j = i+1;j < input.length; j++) {
      console.log('j',j)
      if (input[j] < min) {
        min = input[j];
        minIndex = j;
      }
    }
    input[minIndex] = input[i];
    input[i] = min;
  }
  return input;
}


// describe('SELECTION SORT ', function(){

//   describe("RUN ON [8, 3, 2, 10]: ", function(){
//     it("should return [2, 3, 8, 10]", function(){
//       var test = selectionSort([8,3,2,10]);
//       var answer = [2,3,8,10];

//       expect(test).to.eql(answer);
//     });
//   });

//   describe("RUN ON EMPTY INPUT []: ", function(){
//     it("should return []", function(){
//       var test = selectionSort([]);
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
//       var test = selectionSort(testInput);

//       expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
//     })
//   })

// });
