// take input value and array, return index of value in first line
// PASSED 10/10
function introTutorial(input) {
	inputArray = input.split("\n")
	testValue = inputArray[0]
	testArray = inputArray[2].split(" ")
	for (i=0;i<testArray.length;i++) {
		if (testArray[i] === testValue) {
			console.log(i);
		}
	} 
}

introTutorial("4\n6\n1 4 5 7 9 12")
introTutorial("23\n12\n1 3 5 7 9 11 13 15 17 19 21 23")