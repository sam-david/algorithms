var fs = require('fs');
var triangleArray = []

function readLines(input, func) {
  var remaining = '';
  var lineIndex = 0;
  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      triangleArray.push(line.split(" ").map(Number))
      remaining = remaining.substring(index + 1);
      // func(line, lineIndex);
      index = remaining.indexOf('\n');
      lineIndex++;
    }
  });

  input.on('end', function() {
    console.log(triangleArray)
    console.log('end')
    if (remaining.length > 0) {
      // func(remaining);
    }
  });
}

function func(data, index) {
  console.log('Line ' + index + ":" + data);
  triangleArray.push(data)
}

var input = fs.createReadStream('data/maximum_path_sum_i_data.txt');
readLines(input, func);


var node = function(value){
  this.value = value;
  this.rightChild = null;
  this.leftChild = null;
}

var nodeTree = function(){
  this.root = null;
  this.size = null;
}

nodeTree.prototype.insertValueOnRow = function(val, row) {

}

