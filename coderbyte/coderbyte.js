//return String reversed
function FirstReverse(str) { 
	strArray = str.split("");
  reverseLetters = []
  for ( var i = strArray.length - 1; i >= 0; i--) {
  	reverseLetters.push(strArray[i]);
  }
  return reverseLetters.join(""); 
         
}

FirstReverse("test");                            
FirstReverse("coderbyte");                            
FirstReverse("I Love Code");                            

//Return factorial of input
function FirstFactorial(num) { 
	totalFactorial = 1;
	for (i = 1; i <= num; i++) {
		totalFactorial *= i;
	} 
  return totalFactorial;      
}
   
FirstFactorial(4);  

//return the longest word in the sentence, minus punctuation
function LongestWord(sen) { 
	sentanceArray = sen.split(" ");
	maxLength = 0;
	longWord = "";
	for (i = 0; i < sentanceArray.length; i++) {
		var tempWord = sentanceArray[i].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
		if (tempWord.length > maxLength) {
			maxLength = tempWord.length;
			longWord = tempWord;
		}
	}
  return longWord; 
         
}
   
LongestWord("fun&!! time");    
LongestWord("I love dogs"); 

//secret algorithm that changes letters to one char further in alphabet, vowels must be capitalized
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function LetterChanges(str) { 
	newString = "";
	for (i=0;i<str.length;i++) {
		tempChar = nextChar(str.charAt(i))
		if (tempChar == "a" || tempChar == "e" || tempChar == "i" || tempChar == "o"|| tempChar == "u") {
			newString += tempChar.toUpperCase();
		} else if (tempChar.match(/[a-z]/) != null) {
			newString += tempChar;
		} else {
			newString += str.charAt(i);
		}
	}
  return newString;  
}
   
LetterChanges("hello*3"); 
LetterChanges("fun times!"); 

//have function add up all numbers 1 to n
function SimpleAdding(num) { 
	var totalSum = 0;
	for (i = 1; i <= num; i++) {
		totalSum += i;
	}
  return totalSum;          
}

SimpleAdding(12);  
SimpleAdding(140);

//take a string sentence, and capitalize first letter of each word
function LetterCapitalize(str) { 
	splitString = str.split(" ");
	finalStringArray = []
	for (i = 0; i < splitString.length; i++) {
		capWord = splitString[i].substr(0,1).toUpperCase() + splitString[i].substr(1);
		console.log(capWord);
		finalStringArray.push(capWord);
	}
  return finalStringArray.join().replace(/,/g," ");
}
   
LetterCapitalize("hello world");  
LetterCapitalize("i ran there"); 

//function to test whether letter char are surrounded by either '=' or '+'
//could not figure out a way to combine both conditionals so I had to separate them into two separate tests
function SimpleSymbols(str) { 
	for (i = 0; i < str.length; i++) {
		if (str.charAt(i).match(/\w/) != null) {
			var firstTest = false;
			var secondTest = false;
			if (str.charAt(i - 1) == "+" && str.charAt(i + 1) == "+") {
				console.log(str.charAt(i), "failed first")
				firstTest = true;
			}
			if (str.charAt(i - 1) == "=" && str.charAt(i + 1) == "=") {
				console.log(str.charAt(i), "failed second")
				secondTest = true;
			}
			if (firstTest == true || secondTest == true) {
				return true;
			} else {
			  return false;          
			}
		}
	}
}
   
SimpleSymbols("+d+=3=+s+"); 
SimpleSymbols("f++d+");

//Check to see whether num1 is < num2, if equal return a -1 string??, this one is silly
function CheckNums(num1,num2) { 
	if (num2 > num1) {
		return true;
	} else if (num2 === num1) {
		return "-1";
	} else {
		return false;
	}
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CheckNums(3,122);    
CheckNums(67,67);    

//take input in minutes, convert to Hours:Minutes
function TimeConvert(num) { 
	var hours = Math.floor(num / 60);
	var minutes = num % 60;  
  return hours + ":" + minutes; 
}
 
TimeConvert(126);                            
TimeConvert(45);                            

// take string input and return the chars in alphabetical order
function AlphabetSoup(str) { 
  return str.split("").sort().join().replace(/,/g,"");
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup("coderbyte"); 
AlphabetSoup("hooplah"); 

// test whether string has at least one instance of chars 'a' and 'b' being exactly 3 places away from eachother
function ABCheck(str) { 
	splitString = str.split("");
	for (i=0;i<splitString.length;i++){
		if(splitString[i] == "a") {
			for (j=0; j<splitString.length; j++) {
			 	if (splitString[j] == "b" && j - i == 4) {
			 		return true;
			 	}
			};
		} else if (splitString[i] == "b") {
			for (j=0; j<splitString.length; j++) {
			 	if (splitString[j] == "a" && j - i == 4) {
			 		return true;
			 	}
			}
		}
	}
	return false;
}
   
ABCheck("after badly");                            
ABCheck("Laura sobs");

// take string input and count how many vowels it contains
function VowelCount(str) { 
	splitString = str.split("");
	count = 0;
	for (i=0;i<splitString.length;i++) {
		if (splitString[i] == "a" || splitString[i] == "e" || splitString[i] == "i" || splitString[i] == "o" || splitString[i] == "u") {
			count++;
		}
	}
  return count;          
}
   
VowelCount("hello");                              
VowelCount("coderbyte");

// take string input and count how many words in t contains
function WordCount(str) {
	return str.split(" ").length;
}                              

WordCount("Hello World");
WordCount("one 22 three");

// take string input and test whether there is an equal amount of 'x' and 'o'
function ExOh(str) {
	xCount = 0;
	oCount = 0;
	splitString = str.split("")
	for (i=0;i<splitString.length;i++) {
		if (splitString[i] == "x") {
			xCount++;
		} else if (splitString[i] == "o") {
			oCount++;
		}
	}
	if (xCount == oCount) {
		return true;
	} else {
		return false;
	}
}

ExOh("xooxxo")
ExOh("x")

// test whether string is a valid Palindrome, ignores spaces per request
function Palindrome(str) {
	strArray = str.replace(/ /g,"").split("");
  reverseLetters = [];
  reverseWord = "";
  for ( var i = strArray.length - 1; i >= 0; i--) {
  	reverseLetters.push(strArray[i]);
  }
  reverseWord = reverseLetters.join("").replace(/,/g," ");
  if (reverseWord == str.replace(/ /g,"")) {
  	return true;
  } else {
  	return false;
  }
}

Palindrome("never odd or even")
Palindrome("eye")
Palindrome("butt")

// test whether sequence of numbers follows an arithmetic or geometric pattern
// i.e. consistent difference or constant multiplier
function ArithGeo(arr) {
	var firstDiff = arr[1] - arr[0];
	var firstMulti = arr[1] / arr[0];
	var arithPass = true;
	var geoPass = true;
	for (i=1;i<arr.length -1 ;i++) {
		if (arr[i + 1] - arr[i] != firstDiff) {
			arithPass = false;
		}
		if (arr[i + 1] / arr[i] != firstMulti) {
			geoPass = false;
		}
	}
	if (geoPass == true) {
		return "Geometric"
	} else if (arithPass == true) {
		return "Arithmetic"
	} else {
		return "-1"
	}
}

ArithGeo([5,10,15])
ArithGeo([2,6,18,54])
ArithGeo([2,6,18,24])

// returns the first word from a string which has the most repeating letters
function LetterCountI(str) {
	var splitString = str.split(" ")
	var maxWinnerCount = 1;
	var bigWord = "";
	for (i=0;i<splitString.length;i++) {
		var wordObject = {};
		for (j=0;j<splitString[i].length;j++) {
			if (wordObject.hasOwnProperty(splitString[i].charAt(j))) {
				wordObject[splitString[i].charAt(j)]++;
			} else {
				wordObject[splitString[i].charAt(j)]=1;
			}
			for (letter in wordObject) {
				if (wordObject[letter] > maxWinnerCount) {
					bigWord = splitString[i];
					maxWinnerCount = wordObject[letter];
				}
			}
		}
	}
	if (maxWinnerCount > 1) {
		return bigWord;
	} else {
		return "-1";
	}
}

LetterCountI("Hello apple pie")
LetterCountI("No words")

// take input array and return the second highest and second lowest numbers
// in case there is only 2 or 3 numbers
// very surprised this compare funciton needed to be inserted into sort in order to sort to work with numbers
function SecondGreatLow(arr) {
	sortedArray = arr.sort(function compareNumbers(a, b) {
	  return a - b;
	});
	console.log(sortedArray);
	if (sortedArray.length == 2) {
		return sortedArray[0] + " " + sortedArray[1]
	} else if (sortedArray.length == 3) {
		return sortedArray[1];
	} else {
		return sortedArray[1] + " " + sortedArray[sortedArray.length - 2];
	}
}

SecondGreatLow([1,42,42,180])
SecondGreatLow([4,90])
SecondGreatLow([4,90,180])
SecondGreatLow([4,65,2,34,23,63,75])

// function divides two numbers and returns output as string with commas to format
// found an amazing regex formula online, could not help but use it
function DivisionStringified(num1,num2) {
	return (num1 / num2).toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

DivisionStringified(687644894944,67)

// convert an input string of 'xx:xxpm-xx:xxam' to minutes 
// INCOMPLETE
function CountingMinutesI(str) {
	regExArray = /^(\d{1,2}):(\d{2})(\w{2})-(\d{1,2}):(\d{2})(\w{2})/.exec(str)
	firstTime = {}
	secondTime = {}
	totalMinutes = 0
	if (regExArray[3] == "pm") {
		firstTime['hours'] = parseInt(regExArray[1]) + 12
		firstTime['minutes'] = parseInt(regExArray[2]) 
	} else {
		if (regExArray[1] == "12") {
			firstTime['hours'] = 0;
		} else {
			firstTime['hours'] = parseInt(regExArray[1])
		}
		firstTime['minutes'] = parseInt(regExArray[2])
	}
	if (regExArray[6] == "pm") {
		secondTime['hours'] = parseInt(regExArray[4]) + 12
		secondTime['minutes'] = parseInt(regExArray[5]) 
	} else {
		if (regExArray[4] == "12") {
			secondTime['hours'] = 0;
		} else {
			secondTime['hours'] = parseInt(regExArray[4])
		}
		secondTime['minutes'] = parseInt(regExArray[5])
	}
	if (firstTime['hours'] > secondTime['hours']) {

		totalMinutes = (((24 - firstTime['hours']) * 60) + firstTime['minutes']) + (((secondTime['hours']) * 60) + secondTime['minutes'])
	} else {
		totalMinutes = ((secondTime['hours'] * 60) + secondTime['minutes'])-((firstTime['hours'] * 60) + firstTime['minutes'])
	}
	console.log(firstTime,secondTime,totalMinutes)
}

CountingMinutesI("12:30pm-12:00am")
CountingMinutesI("1:23am-1:08am")

// take input array and return 1 if mode equals the mean, 0 if not
// i think this is a cool way to sum up elements of array using reduce
function MeanMode(arr) {
  var	modeCount = {};
  var modeMax = 0;
  var mode = 0;
  for (i=0;i<arr.length;i++) {
  	if( modeCount.hasOwnProperty(arr[i]) ) {
  		modeCount[arr[i]]++;
  	} else {
  		modeCount[arr[i]] = 1;
  	}
  	if (modeCount[arr[i]] > modeMax) {
  		modeMax = modeCount[arr[i]];
  		mode = arr[i];
  	}
  }
  var mean = (arr.reduce(function(a, b) {
	  return a + b;
	})) / arr.length;
	if (mean == mode) {
		return 1;
	} else {
		return 0;
	}
}

MeanMode([1,2,3])
MeanMode([4,4,4,6,2])

// take string input and insert '-' in between odd numbers
function DashInsert(str) {
	splitString = str.split("")
	finalString = ""
	for (i=0;i<splitString.length;i++) {
		if(parseInt(splitString[i])%2 != 0 && parseInt(splitString[i+1])%2 != 0) {
			finalString += splitString[i] + "-"
		} else {
			finalString += splitString[i]
		}
	}
	return finalString;
}

DashInsert("99946")
DashInsert("56730")

// take string input and swap cases of each char, uppercase to lowercase
// str.charAt(i).match(/\w/) != null
function SwapCase(str) {
	splitString = str.split("")
	finalString = "";
	for (i=0;i<splitString.length;i++) {
		if(splitString[i].match(/\w/) != null) {
			if(splitString[i] == splitString[i].toUpperCase()) {
				finalString += splitString[i].toLowerCase();
			} else {
				finalString += splitString[i].toUpperCase();	
			}
		} else {
			finalString += splitString[i];
		}
	}
	return finalString;
}

SwapCase("Hello-LOL")
SwapCase("Sup DUDE!!?")

// take input string with digits scrambled in with text
// return sum of digits within the text string, neighboring digits are considered same number
// I think this is a good solution
function NumberAddition(str) {
	digits = str.match(/\d{1,}/g)
	console.log(digits)
	return digits.reduce(function(a, b) {
	  return parseInt(a) + parseInt(b);
	})
}

NumberAddition("75Number9")
NumberAddition("10 2One Number*1*")
NumberAddition("88Hello 3World!")

// take input array of strings and return the third largest word
// if there is a tie, return the last third largest word
function ThirdGreatest(strArr) {
	sortedArray = strArr.sort(function(a,b) {
		return b.length - a.length;
	})
	return sortedArray[2]
}

ThirdGreatest(['coder','byte','code'])
ThirdGreatest(['abc','defg','z','hijk'])
ThirdGreatest(["hello", "world", "after", "all"])

// is input num a power of two?
function PowersofTwo(num) {
	var x = num;
	while (x % 2 == 0 && x > 1) {
		console.log("before",x)
		x /= 2;
		console.log("after",x)
	}
	if (x==1) {
		return true;
	} else {
		return false;
	}
}

PowersofTwo(16)
PowersofTwo(124)

// calculate additive persistence of input
// this is amount of times you must add the digits all together until you reach a single digit 
function AdditivePersistence(num) {
	count = 0;
	if (num < 10) {return 0;}
	while (num >= 10) {
		numArray = num.toString().split("")
		num = numArray.reduce(function(a, b) {
	  return parseInt(a) + parseInt(b);
		})
		count++;
	}
	return count;
}

AdditivePersistence(4)
AdditivePersistence(19)

// calculate multiplicative persistence of input
// similar to above you must multiply all the digits together until you reach a single digit
function MultiplicativePersistence(num) {
	count = 0;
	if (num < 10) {return 0;}
	while (num >= 10) {
		numArray = num.toString().split("")
		num = numArray.reduce(function(a, b) {
	  return parseInt(a) * parseInt(b);
		})
		count++;
	}
	return count;
}

MultiplicativePersistence(4)
MultiplicativePersistence(25)

// take input array of integers and letter 'E'
// if letter 'E', take smallest digit appearing before 'E' and add to final output array 
function OffLineMinimum(strArr) {
	tempArray = [];
	finalArray = [];
	for (i=0;i<strArr.length;i++) {
		if (strArr[i] != "E") {
			tempArray.push(parseInt(strArr[i]));
		} else {
			smallest = tempArray.sort(function compareNumbers(a, b) {
		  return a - b;
			}).shift()
			finalArray.push(smallest);
		}
	}
	return finalArray.join()
}

OffLineMinimum(["1","2","E","E","3"])
OffLineMinimum(["4","E","1","E","2","E","3","E"])
OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])