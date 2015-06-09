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

// takes input and returns whether or not it is a pangram, contains all letters of the alphabet at least ones
// treats upper and lowercase as the same
// PASSED: 20/20
function pangrams(input) {
	var letters = input.replace(/\s/g,'').toLowerCase().split("");
	var letterObject = {};
	var totalLetters = 0;
	for (var i=0;i<letters.length;i++) {
		if (letterObject.hasOwnProperty(letters[i])) {
			letterObject[letters[i]]++;
		} else {
			letterObject[letters[i]] = 1;
			totalLetters++;
		}
	}
	if (totalLetters === 26) {
		console.log("pangram");
	} else {
		console.log("not pangram")
	}
}

pangrams("We promptly judged antique ivory buckles for the next prize")
pangrams("We promptly judged antique ivory buckles for the prize")

// string only pass when they have alternate chars ABABA
// find the minimum number of deletions to get rid of any repeating consecutive chars
// PASSED: 30/30, nice simple solution
function alternatingCharacters(input) {
	var strings = input.split("\n");
	strings.shift();
	for (var i=0;i<strings.length;i++) {
		var deletionsRequired = 0;
		for (var j=0;j<strings[i].length;j++) {
			if (strings[i][j] == strings[i][j+1]) {
				deletionsRequired++;
			}
		}
		console.log(deletionsRequired);
	}
}

alternatingCharacters("5\nAAAA\nBBBBB\nABABABAB\nBABABA\nAAABBB")

// figure out whether string input is an anagram of a palindrome
// PASSED: 30/30
function gameOfThrones(input) {
	var codedString = input.split("");
	var letterObject = {};
	var letterCount = 0;
	var oneOdd = false;
	var isSolo = false;
	var passedTest = true;
	for (i=0;i<codedString.length;i++) {
		if (letterObject.hasOwnProperty(codedString[i])) {
			letterObject[codedString[i]]++;
		} else {
			letterObject[codedString[i]] = 1;
			letterCount++;
		}
	}
	for (letter in letterObject) {
		if (letterObject[letter] % 2 != 0) {
			if(oneOdd == false) {oneOdd=true
			} else if (oneOdd == true) {
				console.log("NO")
				passedTest = false;
				break;
			}
			if(letterObject[letter] == 1 && isSolo == false) {
				isSolo = true;
			} else if (letterObject[letter] == 1 && isSolo == true) {
				console.log("NO");
				passedTest = false;
				break;
			}
		}
	}
	if (passedTest) {console.log("YES")}
}

gameOfThrones("aaabbbb")
gameOfThrones("cdefghmnopqrstuvw")
gameOfThrones("cdcdcdcdeeeef")

// given an input of multiple rock elements, find the common letters between all the rocks
// PASSED: 30/30
function gemstones(input) {
	stones = input.split("\n").map(function(value) {
		return value.replace(/(.)(?=.*\1)/g, "")
	})
	stones.shift()
	finalCount = 0;
	for (var i=0;i<stones[0].length;i++){
		currentChar = stones[0][i]
		currentCount = 0;
		for (var s=1;s<stones.length;s++) {
			if (stones[s].indexOf(currentChar) != -1) {
				currentCount++;
			}
		}
		if (currentCount == stones.length-1) {
			finalCount++;
		}
	}
	console.log(finalCount);
}

gemstones("3\nabcdde\nbaccd\neeabg")

// compare two strings and test whether they are anagrams
// returning how many letters have to be deleted to make them anagrams 
function makeItAnagram(input) {
	
}