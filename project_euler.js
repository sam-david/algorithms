// total sum of multiples of 3 and 5 under input number
// Correct!
function muliplesOf3and5 (num) {
	var totalSum = 0;
	for (i=1;i<num;i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			totalSum += i;
		}
	}
	console.log(totalSum);
}

// muliplesOf3and5(1000)

// sum all even numbers up to input in fibonacci sequence
function evenFibonacciNumbers(num) {
	var sequence = [1,2];
	var evenSequence = [2];
	for (i=2;i<num;i++) {
		oneBack = sequence[i-1];
		twoBack = sequence[i-2];
		newValue = oneBack + twoBack;
		if (newValue < num) {
			sequence.push(newValue)
			if (newValue % 2 == 0) {
				evenSequence.push(newValue);
			}
		}
	};
	var finalSum = evenSequence.reduce(function(p,c) {
		return p + c;
	});
	console.log(finalSum);
	console.log(sequence);
	console.log(evenSequence);
}

// evenFibonacciNumbers(100)
// evenFibonacciNumbers(4000000)

// largest prime factor of a certain number
// this works but it seems to get stuck with higher numbers

function isPrime(num) {
	for (var j=2;j<num;j++) {
		if (num % j == 0) {
			return false;
		}
	}
	return true;
}

function largestPrime(num) {
	var largestPrime = 0;
	for (var i=2;i<num;i++) {
		if (num % i == 0 && isPrime(i)) {
			largestPrime = i;
			console.log("match",i)
		}
	}
	if (largestPrime == 0) {largestPrime = num}
	console.log(largestPrime);
}

// largestPrime(17)
// largestPrime(600851475143)

// find the largest palindrome made from the product of two three digit numbers
function isPalindrome(num) {
	numArray = num.toString().split("");
	for (var i = 0; i<numArray.length / 2;i++) {
		if (numArray[i] != numArray[numArray.length - i - 1]) {
			return false;
		}
	}
	return true;
}

// find the largest palindrome possible from muliplying two three digit numbers
// Answer: 906609
function largestPalindrome() {
	var largestPalindrome = 0;
	for (var i=100;i<999;i++) {
		for (var j=100;j<999;j++) {
			if (isPalindrome(j * i) && j * i > largestPalindrome) {
				console.log("found one greater",j*i)
				largestPalindrome = j * i;
			}
		}
	}
	console.log("Largest Palindrome:", largestPalindrome)
}

// find the smallest number that is evenly divisible by number 1 to 20
// Answer: 232792560
function smallestMultiple() {
	var multiple = 0;
	for (var i = 1;i<Infinity;i++) {
		if (i % 1 == 0 && i % 2 == 0 && i % 3 == 0 && i % 4 == 0 && i % 5 == 0 && i % 6 == 0 && i % 7 == 0 && i % 8 == 0 && i % 9 == 0 && i % 10 == 0 && i % 11 == 0 && i % 12 == 0 && i % 13 == 0 && i % 14 == 0 && i % 15 == 0 && i % 16 == 0 && i % 17 == 0 && i % 18 == 0 && i % 19 == 0 && i % 20 == 0) {
			console.log(i);
			break;
		}
	}
}

// find the difference between the square of the sum of the first 100 natural numbers and the sum of the squares
// Answer: 25164150
function sumSquareDifference() {
	var sumOfSquares = 0;
	var squareofSum = 0;
	for (i=1;i<=100;i++) {
		sumOfSquares += Math.pow(i, 2);
		squareofSum += i;
	}
	squareofSum = Math.pow(squareofSum, 2);
	console.log(squareofSum - sumOfSquares);
}

// find the 10001st prime number 
// Answer: 104743
function isPrime(num) {
	for (var j=2;j<num;j++) {
		if (num % j == 0) {
			return false;
		}
	}
	return true;
}

function TenThousandOnePrime() {
	var primeCount = 0;
	for (var i = 2;i<Infinity;i++) {
		if (isPrime(i)) {
			primeCount++;
		}
		if (primeCount === 10001) {
			console.log(i);
			break;
		}
	}
}

// find the thirteen adjacent digits in the sequence with the greatest product
// Answer: 23514624000
function LargestProductInSeries(series) {
	seriesArray = series.split("").map(Number)
	largestProduct = 0;
	for (var i=0;i<seriesArray.length;i++) {
		currentTest = seriesArray[i] * seriesArray[i+1] * seriesArray[i+2] * seriesArray[i+3] * seriesArray[i+4] * seriesArray[i+5] * seriesArray[i+6] * seriesArray[i+7] * seriesArray[i+8] * seriesArray[i+9] * seriesArray[i+10] * seriesArray[i+11] * seriesArray[i+12]; 
		if (currentTest > largestProduct) {
			largestProduct = currentTest;
		}
	}
	console.log(largestProduct);
}

// LargestProductInSeries("7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450")

//find the one Pythagorean triplet where a + b + c = 1000
// Incomplete
function PythagoreanTriplet() {
	for (var a=1;a<Infinity;a++) {
		for (var b=1;b<Infinity;b++) {
			var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
			if (a + b + c === 1000) {
				console.log("found it", a*b*c,a,b,c)
				break;
			}
		}
	}
}

// find the sum of all primes below 2 million
// ANSWER: 142913828922
function isPrime(num) {
	for (var j=2;j<num;j++) {
		if (num % j == 0) {
			return false;
		}
	}
	return true;
}

function SummationOfPrimes() {
	primeSum = 0;
	for (var i=2; i<2000000; i++) {
		if (isPrime(i)) {
			console.log("found prime",i,primeSum)
			primeSum += i;
		}
	}
	console.log(primeSum)
}

// find the largest product in the grid of four numbers in a row
// can be any direction including diagonal
// Designed to work with any size grid, not just the 20x20 provided
// Answer: 70600674
function LargestProductGrid(grid) {
	gridArray = grid.split("\n").map(function(row) {
		return row.split(" ").map(Number)
	});
	console.log(gridArray)
	var rightCounter = 0;
	var maxProduct = 0;
	for (var i=0;i<gridArray.length;i++) {
		for (var j=0;j<gridArray[i].length;j++) {
			// right
			if (j <= gridArray[i].length - 4) {
				var rightProduct = gridArray[i][j] * gridArray[i][j+1] * gridArray[i][j+2] * gridArray[i][j+3];
				if (rightProduct > maxProduct) {
					maxProduct = rightProduct;
				}
			}
			// left
			if (j >= 3) {
				var leftProduct = gridArray[i][j] * gridArray[i][j-1] * gridArray[i][j-2] * gridArray[i][j-3];
				if (leftProduct > maxProduct) {
					maxProduct = leftProduct;
				}
			}
			// up
			if (i >= 3) {
				var upProduct = gridArray[i][j] * gridArray[i-1][j] * gridArray[i-2][j] * gridArray[i-3][j];
				if (upProduct > maxProduct) {
					maxProduct = upProduct;
				}
			}
			// down
			if (i <= gridArray.length - 4) {
				downProduct = gridArray[i][j] * gridArray[i+1][j] * gridArray[i+2][j] * gridArray[i+3][j];
				if (downProduct > maxProduct) {
					maxProduct = downProduct;
				}
			}
			// up-right diagonal 
			if (i >= 3 && j <= gridArray[i].length - 4) {
				upRightProduct = gridArray[i][j] * gridArray[i-1][j+1] * gridArray[i-2][j+2] * gridArray[i-3][j+3];
				if (upRightProduct > maxProduct) {
					maxProduct = upRightProduct;
				}
			}
			// up-left diagonal
			if (i >= 3 && j >= 3) {
				upLeftProduct = gridArray[i][j] * gridArray[i-1][j-1] * gridArray[i-2][j-2] * gridArray[i-3][j-3];
				if (upLeftProduct > maxProduct) {
					maxProduct = upLeftProduct;
				}
			}
			// down-right diagonal
			if (i <= gridArray.length - 4 && j <= gridArray[i].length - 4) {
				downRightProduct = gridArray[i][j] * gridArray[i+1][j+1] * gridArray[i+2][j+2] * gridArray[i+3][j+3];
				if (downRightProduct > maxProduct) {
					maxProduct = downRightProduct;
				}

			}
			// down-left diagonal
			if (i <= gridArray.length -4 && j >= 3) {
				rightCounter++
				console.log(rightCounter)
				console.log(gridArray[i][j] , gridArray[i+1][j-1] , gridArray[i+2][j-2] , gridArray[i+3][j-3])
				downLeftProduct = gridArray[i][j] * gridArray[i+1][j-1] * gridArray[i+2][j-2] * gridArray[i+3][j-3];
				if (downLeftProduct > maxProduct) {
					maxProduct = downLeftProduct;
				}

			} 
		}
	}
	console.log(maxProduct);
}

// LargestProductGrid("08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08\n49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00\n81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65\n52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91\n22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80\n24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50\n32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70\n67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21\n24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72\n21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95\n78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92\n16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57\n86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58\n19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40\n04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66\n88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69\n04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36\n20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16\n20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54\n01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48")

// What is the value of the first triangle number to have over five hundred divisors
// This script took like 30 min to run!!
// Solved: 76576500, with a tri num of 576
function findDivisors(num) {
	var divisorArray = [];
	for (var i=1;i<=num;i++) {
		if (num % i == 0) {
			divisorArray.push(i);
		}
	}
	return divisorArray
}

function TriangleNumbers() {
	triNum = 0;
	var triArray = []
	for (var i=1;i<Infinity;i++) {
		triNum += i;
		triArray = findDivisors(triNum);
		console.log("testing",triNum,triArray.length)
		if (triArray.length > 500) {break;}
	}
	console.log(triNum)
}
