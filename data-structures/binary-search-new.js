var binaryArray = [2, 4, 6, 7, 8, 12, 45, 98, 384]

function binarySearch(searchElement, searchArray) {

  var minIndex = 0;
  var maxIndex = searchArray.length - 1;
  var currentIndex = Math.floor(searchArray.length / 2);

  while (minIndex <= maxIndex) {
    if (searchArray[currentIndex] > searchElement) {
      maxIndex = currentIndex - 1
      currentIndex = Math.floor((maxIndex + minIndex) / 2);
    } else if (searchArray[currentIndex] < searchElement) {
      minIndex = currentIndex + 1
      currentIndex = Math.floor((maxIndex + minIndex) / 2);
    } else if (searchArray[currentIndex] == searchElement) {
      return currentIndex
    }
  }
  return false;
}

console.log(binarySearch(6, binaryArray));
console.log(binarySearch(5, binaryArray));
console.log(binarySearch(98, binaryArray));
