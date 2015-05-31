// Does the string fit the condition (S_i - s_i-1) = (R_i - R_i-1) for every i
// where S is the string and R is the string in reverse, i is index to full length of string
// PASSED with 15/15!!!!
// console.log("INDEX:",j,"S",strings[i][j],"S-1",strings[i][j-1],"R",strings[i][strings[i].length-j-1],"R-1",strings[i][strings[i].length-j])
function funnyString(input) {
	strings = input.split("\n")
	strings.shift();
	for (var i=0;i<strings.length;i++) {
		var funnyTest = true;
		for (var j=0;j<strings[i].length;j++) {
			var straightString = Math.abs(strings[i].charCodeAt(j) - strings[i].charCodeAt(j-1));
			var reverseString = Math.abs(strings[i].charCodeAt(strings[i].length-j-1) - strings[i].charCodeAt(strings[i].length-j));
			if (straightString != reverseString && strings[i][j-1] != undefined && strings[i][strings[i].length-j] != undefined) {
				console.log("Not Funny");
				funnyTest = false;
				break;
			}
		}
		if (funnyTest) {console.log("Funny");}
	}
}

funnyString("2\nacxz\nbcxz")