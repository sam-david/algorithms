// Memoization, T: O(n)

var latticePaths = function(n){
  var cache = {};
  var traverse = function(xCoor, yCoor) {
    if (cache[xCoor + "," + yCoor] != undefined) {
      return cache[xCoor + ",", yCoor];
    } else if (xCoor == n && yCoor === n) {
      return 1;
    } else if (xCoor > n || yCoor > n) {
      return 0;
    }

    cache[xCoor + "," + yCoor] = traverse(xCoor + 1, yCoor) + traverse(xCoor, yCoor + 1);
    return cache[xCoor + "," + yCoor];
  }

  return traverse(0, 0);
}

// Tabulation

var latticePaths = function(n) {
  var work = Array(n+1).fill(1)

  for (var i = 0; i < n; i++) {
    for (var j = 1; j < n+1; j++) {
      work[j] = work[j] + work[j-1];
    }
  }

  return work[n]
}

console.log(latticePaths(2))
