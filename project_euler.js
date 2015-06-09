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

muliplesOf3and5(1000)

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

evenFibonacciNumbers(100)
evenFibonacciNumbers(4000000)

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

largestPrime(17)
largestPrime(600851475143)

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