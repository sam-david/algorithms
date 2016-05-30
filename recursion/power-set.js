
var powerSet = function(str){
  var result = [];
  var library = {};

  function traverse(buildUp, depth) {
    console.log(buildUp, depth)
    if (depth == str.length) {
      var key = buildUp.split("").sort().join("");
      console.log('key', key)
      if (library[key] === undefined) {
        result.push(buildUp);
        library[key] = true;
      }
      return;
    }
    // left
    traverse(buildUp, depth+1)
    // right
    traverse(buildUp + str[depth], depth+1);
  }

  traverse("", 0);
  return result;
}

// var expect = require('chai').expect;

// describe('POWERSET FUNCTION ', function() {

//   describe("RUN ON 'abc': ", function () {
//     it("should return [ 'abc', 'ab', 'ac', 'a', 'bc', 'b', 'c', '' ]", function () {
//       var test = powerSet('abc');
//       var answers = [ 'abc', 'ab', 'ac', 'a', 'bc', 'b', 'c', '' ];

//       for (var i = 0; i < answers.length; i++){
//         expect(test).to.include(answers[i]);
//       }
//       expect(test.length).to.eql(answers.length);
//       console.log('');
//     });
//   });

//   describe("RUN ON ''", function () {
//     it("should handle an empty string input", function () {
//       var test = powerSet('');
//       expect(test[0]).to.eql('');
//       expect(test.length).to.eql(1);
//     });
//   });

//   describe("RUN ON 'abca'", function () {
//     it("should handle duplicates", function () {
//       var test = powerSet('abca');
//       var answers = [ '','a','c','ca','b','ba','bc','bca','aa','ac','aca','ab','aba','abc','abca' ];

//       for (var i = 0; i < answers.length; i++){
//         expect(test).to.include(answers[i]);
//       }
//       expect(test.length).to.eql(answers.length);
//     });
//   });

// });
