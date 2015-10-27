// take input and evaluate whether or not it is a prime number
function PrimeTime(num) {
	for (i=num-1;i>1;i--) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

// PrimeTime(19)
// PrimeTime(110)

// take input string of chars and encode outputing the number of times a char is repeated in a row next to the char 
// INCOMPLETE
function RunLength(str) {
	charArray = str.split("")
	finalString = "";
	for (i=0;i<charArray.length;i++) {
		if (charArray[i] == charArray[i+1]) {
			var count = 0;
			for(j=0;j<charArray.length;j++) {
				console.log('letter before',charArray[i],charArray[j],count)
				if (charArray[j] != charArray[i]) {break;}
				count++;
				console.log('letter after',charArray[i],charArray[j],count)
			}
			finalString += count + charArray[i]
			console.log("before:",charArray)
			charArray.splice(0,count);
			console.log("Spliced from",i,count,charArray);
		} else {
			finalString += "1" + charArray[i];
			charArray.splice(0,1)
		}
	}
	return finalString;
}

// RunLength("abbcde")
// RunLength("wwwbbbw")

// take two input numbers and return the greatest common factor
function Division(num1,num2) {
	factor = 0;
	if (num1 > num2) {
		for (i=1;i<num2;i++){
			if (num1 % i == 0 && num2 % i == 0) {
				factor = i;
			}
		}
	} else if (num1 < num2) {
		for (i=1;i<num1;i++){
			if (num1 % i == 0 && num2 % i == 0) {
				factor = i;
			}
		}
	}
	return factor;
}

// Division(7,3)
// Division(36,54)

// take two string inputs and figure out whether the letters from string2 are in string1
function StringScramble(str1,str2) {
	var str1Object = {};
	var str2Object = {};
	for (i=0;i<str1.length;i++) {
		if(str1Object.hasOwnProperty(str1[i])) {
			str1Object[str1[i]]++;
		} else {
			str1Object[str1[i]] = 1;
		}
	}
	for (j=0;j<str2.length;j++) {
		if(str2Object.hasOwnProperty(str2[j])) {
			str2Object[str2[j]]++;
		} else {
			str2Object[str2[j]] = 1;
		}
	}
	for (letter in str2Object) {
		if (str1Object.hasOwnProperty(letter) == false) {return false;}
		if (str1Object[letter] > str2Object[letter]) {return false;}
	}
	console.log(str1Object,str2Object)
	return true;
}

// StringScramble("cdore","coder")
// StringScramble("h3llko","hello")
// StringScramble("rkqodlw","world")

// take input array and determine whether any squence of numbers can be added together to equal the max number in the array 
// INCOMPLETE this sounds like it might require recursion
// unsure of how to test every single sequence of adding numbers
function ArrayAddition(arr) {

}

//convert a binary string into its decimal form 
function BinaryConverter(str) {
	splitString = str.split("")
	sum = 0;
	powerCounter = splitString.length - 1;
	for (i=0;i<splitString.length;i++) {
		//no idea why i had to make this base case but for some reason 
		// anytime it was a '0' for the last digit it would give the answer as 1 causing all the answers ending in '0' to be off by 1
		if (i == splitString.length - 1 && splitString[i] == "0") {
			break;
		}
		sum += Math.pow((parseInt(splitString[i])*2),powerCounter)
		powerCounter--;
	}
	return sum
}

// BinaryConverter("100101")
// BinaryConverter("011")

// take input string and number, scramble string so that all chars are shifted the input number over  to the right in the alphabet
function CaesarCipher(str,num) {
	function shiftChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + num);
	}
	splitString = str.split("");
	finalString = "";
	for (i=0;i<splitString.length;i++) {
		if (splitString[i].match(/\w/) != null) {
			finalString += shiftChar(splitString[i]);
		} else {
			finalString += splitString[i];
		}
	}
	return finalString;
}

// CaesarCipher("Hello",4)
// CaesarCipher("abc",0)
// CaesarCipher("Caesar Cipher",2)

// take input array and return the mode, if mode tied return number that appears first in array
function SimpleMode(arr) {
	modeMax = 1;
	currentMode = 0;
	modeObject = {}
	for (i=0;i<arr.length;i++) {
		if(modeObject.hasOwnProperty(arr[i])) {
			modeObject[arr[i].toString()]++;
			if (modeObject[arr[i].toString()] > modeMax) {
				modeMax = modeObject[arr[i].toString()];
				currentMode = arr[i]
			}
		} else {
			modeObject[arr[i].toString()] = 1;
		}
	}
	if (modeMax != 1) {
		return currentMode;
	} else {
		return -1;
	}
}

// SimpleMode([5,5,2,2,1])
// SimpleMode([10,4,5,2,4])
// SimpleMode([3,4,1,6,10])

// takes input array and returns the minimum number of integers needed to make the contents of the array consecutive from lowest ot highest
//I like my solution here, I found the unique filter on stack overflow
function Consecutive(arr) {
	function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
	}
	filteredArray = arr.filter(onlyUnique).sort(function compareNumbers(a, b) {
	  return a - b;
	})
	return (filteredArray[filteredArray.length-1] - filteredArray[0]) - 2
}

// Consecutive([5,10,15])
// Consecutive([-2,10,4])

// expansion on previous challenge, now output must show division of two input numbers
// formatted with commas and 4 significant digits
function FormattedDivision(num1,num2) {
	remainder = ((num1 / num2).toFixed(4) - Math.floor(num1 / num2)).toString().slice(1,6);
	return Math.floor(num1 / num2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + remainder;
}

// FormattedDivision(687644894944,67)
// FormattedDivision(2,3)
// FormattedDivision(10,10)

// find the next greater number, greater than num, that uses the same digits
// INCOMPLETE
function PermutationStep(num) {
	// ridiculous way to get the length of the input num, then find the max possible value by multiplying length * 9
	maxNum = parseInt(Array(num.toString().length).join("9"))
	for (i=0;i<=maxNum;i++) {
		var tempArray = i.split("")
		console.log(i);
	}

}

// PermutationStep(11211);
// PermutationStep(41352);

// take two inputs, if there is a straight triple in input 1 and the same straight doube in input 2, return true 
function TripleDouble(num1,num2) {
	var oneBack = "";
	var twoBack = "";
	inputOneArray = num1.toString().split("")
	inputTwoArray = num2.toString().split("")
	var tripleArray = [];
	var doubleArray = [];
	// check first input for triples
	for (i=0;i<inputOneArray.length;i++){
		if (oneBack == twoBack && oneBack == inputOneArray[i]) {
			tripleArray.push(inputOneArray[i]);
		} else if (oneBack == inputOneArray[i]) {
			twoBack = oneBack;
		}
		oneBack = inputOneArray[i];
	}
	// check second input for doubles
	for (i=0;i<inputTwoArray.length;i++) {
		if (oneBack == inputTwoArray[i]) {
			doubleArray.push(inputTwoArray[i])
		}
		oneBack = inputTwoArray[i]
	}
	// loop through 1..9 to see if both arrays contain it
	for (i=1;i<=9;i++) {
		if (tripleArray.indexOf(i.toString()) != -1 && doubleArray.indexOf(i.toString()) != -1) {
			return 1;
		}
	}
	return 0;
}

// TripleDouble(451999277,41177722899)
// TripleDouble(465555,5579)
// TripleDouble(67844,66237)

// take input string and return 1 if all the brackets are correctly matched and each is accounted for
// INCOMPLETE: only accounts for when brackets are all in one unit, not when there are two separte groups
function BracketMatcher(str) {
	brackets = str.split("").filter(function(item){
		return item === "(" || item === ")"
	})
	if (brackets.length % 2  != 0) {return 0;}
	for (i=0;i<brackets.length/2;i++){
		frontBracket = brackets.shift();
		backBracket = brackets.pop();
		console.log(frontBracket,backBracket,brackets)
		if (frontBracket != "(" || backBracket != ")") {
			return 0
		}
	}
	console.log(brackets)
	// while (brackets != []) {
	// 	if (brackets != []) {
	// 		frontBracket = brackets.shift();
	// 		backBracket = brackets.pop();
	// 	}
	// 	console.log(frontBracket, backBracket,brackets)
	// 	if (frontBracket != "(" && backBracket != ")") {
	// 		return 0
	// 	}
	// }
	return 1
}

// BracketMatcher("(hello (world))")
// BracketMatcher("((hello (world))")
// BracketMatcher("(coder)(byte)))")
// BracketMatcher("(c(oder)) b(yte)") //doesn't work

// take input array and determine the total number of duplicate entries
function DistinctList(arr) {
	dupCounter = {}
	var count = 0;
	for (i=0;i<arr.length;i++) {
		if (dupCounter.hasOwnProperty(arr[i])) {
			dupCounter[arr[i]]++;
		} else {
			dupCounter[arr[i]] = 1;
		}
	}
	for (value in dupCounter) {
		if (dupCounter[value] > 1) {
			count += dupCounter[value] - 1
		}
	}
	console.log(count);
}

// DistinctList([0,-2,-2,5,5,5])
// DistinctList([100,2,101,4])

// encode string input by replacing every alphabet char with its corresponding number order in the alphabet
// Really like this solution!
function NumberEncoding(str) {
	chars = str.split("").map(function(item) {
		if (item.match(/[a-zA-Z]/) != null) {
			return (item.charCodeAt(0) - 96);
		} else {
			return item;
		}
	})
	console.log(chars.join(""))
}

// NumberEncoding("hello 45")
// NumberEncoding("jaj-a")

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function PrimeMover(num) {
	var count = 0;
	for (var i=1;i<Infinity;i++) {
		if (isPrime(i)) {
			count++;
		}
		if (count === num) {
			return i;
		}
	}
}

console.log(PrimeMover(16))
PrimeMover(9)
PrimeMover(100)