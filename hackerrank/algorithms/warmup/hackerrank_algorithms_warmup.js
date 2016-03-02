
// first algo showing how to grab inputs
function solveMeFirst(a, b) {
    return a+b;
}

function main() {
    // call `readLine()` to read a line.
    // use console.log() to write to stdout

    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}

test = "Line 1 \n Line2"

function lonelyInteger(input) {
	integerCount = {}
	inputIntegers = input.split("\n")[1].split(" ")
	for (i=0;i<inputIntegers.length;i++) {
		if (integerCount.hasOwnProperty(inputIntegers[i])) {
			integerCount[inputIntegers[i]]++;
		} else {
			integerCount[inputIntegers[i]] = 1;
		}
	}
	for (value in integerCount) {
		if (integerCount[value] == 1) {
			// return value;
			process.stdout.write(value);
		}
	}
}

lonelyInteger("1\n1")
lonelyInteger("9\n4 9 95 93 57 4 57 93 9")

// given N sticks with a length, perform a cut operation by reducing all sticks by the amount of the smallest stick 
// repeat this operation until there are no stick left, return number of sticks cut in each cut operation 
// INCOMPLETE: my while loop appears to be infinite, however I can't undrestand why
function cutTheSticks(input) {
	sticks = input.split("\n")[1].split(" ").map(Number);
	outputArray = []
	console.log(Math.min.apply(null, sticks),sticks);
	while (sticks != []) {
		currentCutLength = Math.min.apply(null, sticks);
		console.log(sticks.length,sticks);
		tempArray = [];
		for (i=0;i<sticks.length;i++){
			if (sticks[i] - currentCutLength > 0) {
				tempArray.push(sticks[i] - currentCutLength)
			}
		}
		sticks = tempArray;
		// sticks = sticks.map(function(item) {
		// 	if (item - currentCutLength <= 0) {
		// 		return true 
		// 	} else {
		// 		return item - currentCutLength;
		// 	};
		// })
	}
}

cutTheSticks("6\n5 4 4 2 2 8")

// a professor will cancel class if there are less than K students in a class at the start
// figure out of class is canceled by taking an input of integers representing each students arrival time, neg is before class, pos is aafter start
// return whether class was held, the input has multiple test cases
function angryProfessor(input) {
	grossInput = input.split("\n")
	var currentMin = 0;
	console.log("test cases", parseInt(grossInput[0]),(parseInt(grossInput[0])*2))
	for (i=1;i<=(parseInt(grossInput[0])*2);i++) {
		console.log(grossInput[i],i)
		if (i % 2 != 0) {
			currentMin = parseInt(grossInput[i].split(" ")[1])
			console.log("grabbed min",currentMin)
		} else {
			console.log('calling test')
			testStudents(grossInput[i].split(" ").map(Number),currentMin)
			console.log('fart')
		}
	}
	// minStudents = parseInt(input.split("\n")[0].split(" ")[1]);
	// studentArrivals = input.split("\n")[1].split(" ").map(Number);
	//INCOMPLETE: only works for one student. could not get loop to continue
function testStudents(studentArray,minAllowed) {
		console.log(studentArray)
		var totalBefore = 0;
		for (i=0;i<studentArray.length;i++) {
			if (studentArray[i] <= 0) {
				totalBefore++;
			}
		}
		console.log(totalBefore,minAllowed);
		if (totalBefore >= minAllowed) {
			console.log("YES")
		} else {
			console.log("NO")
		}
	}
}

angryProfessor("2\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1")

// create a function that calculates the number of chocolate peices you can get when given the amount of cuts 
// SOLVED: 20/20 points
function halloweenParty(input) {
	cuts = input.split("\n").map(Number)
	cuts.shift()
	for (i=0;i<cuts.length;i++) {
		var rows = Math.ceil(cuts[i] / 2);
		var cols = Math.floor(cuts[i] / 2);
		console.log(rows * cols);
	}
}

halloweenParty("4\n5\n6\n7\n8")

// find digits within a number that exactly divide into itself leaving no remainder
// count the number of digits the number has within itself that do this
function findDigits(input) {
	digits = input.split("\n").map(Number)
	digits.shift();
	for (i=0;i<digits.length;i++){
		currentNumber = digits[i];
		currentNumberArray = digits[i].toString().split("").map(Number)
		divideCount = 0;
		for (j=0;j<currentNumberArray.length;j++){
			if (currentNumber % currentNumberArray[j] === 0) {
				divideCount++;
			}
		}
		console.log(divideCount);
	}
}

findDigits("2\n12\n1012")

// calculates the amount of chocolate you can eat given
// amount of caash on hand, price of choclate, and a discount of a free chocolate every M wrappers
// SOLVED but answer is 18/20 on hackerrank. not passing one of the test cases
function chocolateFeast(input) {
	cases = input.split("\n");
	cases.shift();
	for (i=0;i<cases.length;i++) {
		var tempArray = cases[i].split(" ").map(Number);
		var cash = tempArray[0];
		var price = tempArray[1];
		var discount = tempArray[2];
		var finalTrade = 0;
		var totalPurchased = Math.floor(cash / price);
		var totalGiven = Math.floor(totalPurchased / discount);
		var remainingWrappers = totalPurchased % discount;
		var finalTrade = Math.floor((remainingWrappers + totalGiven) / discount);
		var totalEaten = totalPurchased + totalGiven + finalTrade
		console.log(totalEaten);
	}
}

chocolateFeast("3\n10 2 5\n12 4 4\n6 2 2")

// find the cavities in a grid by denoting the input with an X 
// where a digit is surrounded on all four sides by number less then itself
// SOLVED 20/20 one of my better ones yet
function cavityMap(input) {
	arrayMap = input.split("\n").map(function(item){
		return item.split("").map(Number);
	})
	arrayMap.shift();
	for (i=0;i<arrayMap.length;i++){
		var currentLine = [];
		for (j=0;j<arrayMap[i].length;j++) {
			var above = undefined, below = undefined, left = undefined, right = undefined;
			if (i != 0) {var above = arrayMap[i - 1][j];}
			if (i != arrayMap.length - 1) {var below = arrayMap[i + 1][j]}
			if (j != 0) {var left = arrayMap[i][j - 1]}
			if (j != arrayMap[i].length - 1) {var right = arrayMap[i][j + 1];}
			if (arrayMap[i][j] > above && arrayMap[i][j] > below && arrayMap[i][j] > left && arrayMap[i][j] > right) {
				currentLine.push("X")
			} else {
				currentLine.push(arrayMap[i][j]);
			}
		}
		console.log(currentLine.join(""))
	}
}

cavityMap("4\n1112\n1912\n1892\n1234")

// take input cases, first line is the amount of black gift and white gift
// second line is the price of black, price of white, price to convert
// return the cost of buying all the gifts
// Solved with a 22.8/25 missed 2 testcases
function taumBday(input) {
	inputArray = input.split("\n")
	inputArray.shift();
	var blackCount = 0;
	var whiteCount = 0;
	for (i=0;i<inputArray.length;i++){
		currentLine = inputArray[i].split(" ").map(Number)
		if (i % 2 == 0) {
			blackCount = currentLine[0];
			whiteCount = currentLine[1];
		} else if (i % 2 != 0) {
			blackPrice = currentLine[0]
			whitePrice = currentLine[1]
			convertPrice = currentLine[2]
			calculateCost(blackCount,whiteCount,blackPrice,whitePrice,convertPrice);
		}
	}
	function calculateCost(bCount,wCount,bPrice,wPrice,cPrice) {
		var totalCost = 0;
		if (bCount * bPrice < (bCount * wPrice) + (bCount * cPrice)) {
			totalCost += bCount * bPrice;
		} else {
			totalCost += (bCount * wPrice) + (bCount * cPrice)
		}
		if (wCount * wPrice < (wCount * bPrice) + (wCount * cPrice)) {
			totalCost += wCount * wPrice;
		} else {
			totalCost += (wCount * bPrice) + (wCount * cPrice)
		}
		console.log(totalCost);
	}
}

taumBday("5\n10 10\n1 1 1\n5 9\n2 3 4\n3 6\n9 1 1\n7 7\n4 2 1\n3 3\n1 9 2")
taumBday("10\n742407782 90529439\n847666641 8651519 821801924\n142640749 652432197\n701695848 936714099 324221606\n736418699 754161925\n912285746 841360803 736841333\n177076565 651852957\n926160119 137199984 872396383\n232813954 654376491\n933554781 63130979 441062505\n988402860 283959645\n572488886 802335530 193057740\n571683259 397259663\n136103531 271866251 405911181\n810421806 414506999\n58343377 512117653 203737449\n235081335 101052703\n957899374 147367080 942413506\n547257058 324443644\n594266462 325933528 461643627")//digits are all slighly off as if there is a rounding error, but its all whole numbers...
//Expected output:
// 617318315833461267
// 711232858900355655
// 1306346564995590229
// 253435467783263923
// 158694707102490425
// 783234000390521730
// 185809605416820942
// 155917081637180036
// 240076105402801530
// 430963577188284828

// create a function that tests whether each word length in a sentance
// cooresponds to the digits of pi 
// INCOMPLETE?? It appears to work on my machine but when plugged into hackerrank I am getting an extra element on the end of songs array being tested and returning an extra 'It's not a pi song'
function songOfPi(input) {
	songs = input.split("\n")
	songs.shift();
	pieIndex = "31415926535897932384626433833".split("")
	for (i=0;i<songs.length;i++) {
		currentSong = songs[i].split(" ")
		console.log(currentSong,i)
		var isMatch = true;
		for (j=0;j<currentSong.length;j++) {
			if (currentSong[j].length != pieIndex[j]) {
				console.log("It's not a pi song.",currentSong);
				isMatch = false;
				break;
			}
		}
		if (isMatch == true) {console.log("It's a pi song.",currentSong)}
	}
}

songOfPi("3\nCan I have a large container of coffee right now\nCan I have a large container of tea right now\nNow I wish I could recollect pi Eureka cried the great inventor Christmas Pudding Christmas Pie Is the problems very center")

// given an input of people and topics, find the maximum number of topics a 2 person team can know
// input is binary where each line is a person, and the binary correspond to whether they know that topic or not
function acmIcpcTeam(input) {
	peopleSkills = input.split("\n")
	peopleSkills.shift();
	var maxSkills = 0;
	console.log(peopleSkills);
	for (i=0;i<peopleSkills.length;i++) {
		for (j=)
	}
} 

acmIcpcTeam("4 5\n10101\n11100\n11010\n00101")