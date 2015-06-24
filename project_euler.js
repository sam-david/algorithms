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

//find the first 10 digits of the 150 digit input
// Spent way too long on the large sum formula but it is so close. It appears to be cutting off the first digit. For example, it did not have the starting '5' in the answer below
// Solved with SimpleSum: 5537376230
function LargeSum(inputNum) {
	var digits = inputNum.split("\n").map(function(digit) {
		return digit.split("").map(Number)
	});
	// console.log("Digits starting Array",digits);
	var finalSum = 0;
	var firstline = true;
	var digitsArray = [];
	var remainder = 0;
	for (var i=0;i<digits.length;i++) {
		// is it the first line??
		if (firstline == true) {
			console.log("adding first line to second line");
			for (var j=0;j<digits[i].length;j++) {
				var index = digits[i].length - j - 1;
				console.log("index",index,"digit line 1:",digits[i][index], "digit line 2:", digits[i+1][index])
				console.log("Math",digits[i][index] + digits[i+1][index] + remainder)
				if (digits[i][index] + digits[i+1][index] + remainder >= 10 && index == 0) {
					var digitHolder = (digits[i][index] + digits[i+1][index] + remainder).toString().split("").map(Number)
					console.log("digitholder", digitHolder)
				} else if (digits[i][index] + digits[i+1][index] + remainder >= 10) {
					digitsArray.unshift(digits[i][index] + digits[i+1][index] + remainder - 10);
					remainder = 1;
				} else {
					digitsArray.unshift(digits[i][index] + digits[i+1][index] + remainder);
					remainder = 0;
				}
			}
			console.log("first + second =", digitsArray.join(""), "remainder",remainder)
			i++;
			firstline = false; 
		} else if (firstline == false) {
			console.log("adding line",i);
			var tempArray = [];
			for (var j=0;j<digitsArray.length;j++) {
				var index = digits[i].length - j - 1;
				var digitsArrayIndex = digitsArray.length - j -1;
				console.log("current line index",index,"total sum index",digitsArrayIndex,"line ",i+1," digit",digits[i][index], "total sum digit",digitsArray[digitsArrayIndex] ,"remainder:",remainder)
				console.log("Math",digits[i][index] + digitsArray[digitsArrayIndex] + remainder)
				if (digits[i][index] == undefined) {
					if (digitsArray[digitsArrayIndex] + remainder >= 10) {
						tempArray.unshift(digitsArray[digitsArrayIndex] + remainder - 10);
						console.log("adding digits array value + remainder")
						remainder = 1;
					} else {
						tempArray.unshift(digitsArray[digitsArrayIndex] + remainder);
						console.log("adding digits array value", digitsArray[digitsArrayIndex] + remainder, remainder)
						remainder = 0;
					}
				} else if (digits[i][index] + digitsArray[digitsArrayIndex] + remainder >= 10 && digitsArrayIndex == 0) {
					var digitHolder = (digits[i][index] + digitsArray[digitsArrayIndex] + remainder).toString().split("").map(Number)
					console.log("digitholder", digitHolder)
					tempArray.unshift(digitHolder[0],digitHolder[1])
					remainder = 0;
				} else if (digits[i][index] + digitsArray[digitsArrayIndex] + remainder >= 10) {
					tempArray.unshift(digits[i][index] + digitsArray[digitsArrayIndex] + remainder - 10);
					remainder = 1;
				} else {
					tempArray.unshift(digits[i][index] + digitsArray[digitsArrayIndex] + remainder);
					remainder = 0;
				}
			}
			digitsArray = tempArray;
			console.log(i," line +",i+1, " line = ", digitsArray.join(""), "remainder",remainder)
		}
	}
	console.log("Final Digits Array", digitsArray.join(""));
}

function SimpleSum(input) {
	var digitArray = input.split("\n").map(Number);
	var totalSum = 0;
	for (i=0;i<digitArray.length;i++) {
		totalSum += digitArray[i];
	}
	console.log("Total simple sum", totalSum)
}
// LargeSum("3710728753\n4637693767\n7432498619");
// SimpleSum("37107287533902102798797998220837590246510135740250\n46376937677490009712648124896970078050417018260538\n74324986199524741059474233309513058123726617309629\n91942213363574161572522430563301811072406154908250\n23067588207539346171171980310421047513778063246676\n89261670696623633820136378418383684178734361726757\n28112879812849979408065481931592621691275889832738\n44274228917432520321923589422876796487670272189318\n47451445736001306439091167216856844588711603153276\n70386486105843025439939619828917593665686757934951\n62176457141856560629502157223196586755079324193331\n64906352462741904929101432445813822663347944758178\n92575867718337217661963751590579239728245598838407\n58203565325359399008402633568948830189458628227828\n80181199384826282014278194139940567587151170094390\n35398664372827112653829987240784473053190104293586\n86515506006295864861532075273371959191420517255829\n71693888707715466499115593487603532921714970056938\n54370070576826684624621495650076471787294438377604\n53282654108756828443191190634694037855217779295145\n36123272525000296071075082563815656710885258350721\n45876576172410976447339110607218265236877223636045\n17423706905851860660448207621209813287860733969412\n81142660418086830619328460811191061556940512689692\n51934325451728388641918047049293215058642563049483\n62467221648435076201727918039944693004732956340691\n15732444386908125794514089057706229429197107928209\n55037687525678773091862540744969844508330393682126\n18336384825330154686196124348767681297534375946515\n80386287592878490201521685554828717201219257766954\n78182833757993103614740356856449095527097864797581\n16726320100436897842553539920931837441497806860984\n48403098129077791799088218795327364475675590848030\n87086987551392711854517078544161852424320693150332\n59959406895756536782107074926966537676326235447210\n69793950679652694742597709739166693763042633987085\n41052684708299085211399427365734116182760315001271\n65378607361501080857009149939512557028198746004375\n35829035317434717326932123578154982629742552737307\n94953759765105305946966067683156574377167401875275\n88902802571733229619176668713819931811048770190271\n25267680276078003013678680992525463401061632866526\n36270218540497705585629946580636237993140746255962\n24074486908231174977792365466257246923322810917141\n91430288197103288597806669760892938638285025333403\n34413065578016127815921815005561868836468420090470\n23053081172816430487623791969842487255036638784583\n11487696932154902810424020138335124462181441773470\n63783299490636259666498587618221225225512486764533\n67720186971698544312419572409913959008952310058822\n95548255300263520781532296796249481641953868218774\n76085327132285723110424803456124867697064507995236\n37774242535411291684276865538926205024910326572967\n23701913275725675285653248258265463092207058596522\n29798860272258331913126375147341994889534765745501\n18495701454879288984856827726077713721403798879715\n38298203783031473527721580348144513491373226651381\n34829543829199918180278916522431027392251122869539\n40957953066405232632538044100059654939159879593635\n29746152185502371307642255121183693803580388584903\n41698116222072977186158236678424689157993532961922\n62467957194401269043877107275048102390895523597457\n23189706772547915061505504953922979530901129967519\n86188088225875314529584099251203829009407770775672\n11306739708304724483816533873502340845647058077308\n82959174767140363198008187129011875491310547126581\n97623331044818386269515456334926366572897563400500\n42846280183517070527831839425882145521227251250327\n55121603546981200581762165212827652751691296897789\n32238195734329339946437501907836945765883352399886\n75506164965184775180738168837861091527357929701337\n62177842752192623401942399639168044983993173312731\n32924185707147349566916674687634660915035914677504\n99518671430235219628894890102423325116913619626622\n73267460800591547471830798392868535206946944540724\n76841822524674417161514036427982273348055556214818\n97142617910342598647204516893989422179826088076852\n87783646182799346313767754307809363333018982642090\n10848802521674670883215120185883543223812876952786\n71329612474782464538636993009049310363619763878039\n62184073572399794223406235393808339651327408011116\n66627891981488087797941876876144230030984490851411\n60661826293682836764744779239180335110989069790714\n85786944089552990653640447425576083659976645795096\n66024396409905389607120198219976047599490197230297\n64913982680032973156037120041377903785566085089252\n16730939319872750275468906903707539413042652315011\n94809377245048795150954100921645863754710598436791\n78639167021187492431995700641917969777599028300699\n15368713711936614952811305876380278410754449733078\n40789923115535562561142322423255033685442488917353\n44889911501440648020369068063960672322193204149535\n41503128880339536053299340368006977710650566631954\n81234880673210146739058568557934581403627822703280\n82616570773948327592232845941706525094512325230608\n22918802058777319719839450180888072429661980811197\n77158542502016545090413245809786882778948721859617\n72107838435069186155435662884062257473692284509516\n20849603980134001723930671666823555245252804609722")

// LargeSum("37107287533902102798797998220837590246510135740250\n46376937677490009712648124896970078050417018260538\n74324986199524741059474233309513058123726617309629\n91942213363574161572522430563301811072406154908250\n23067588207539346171171980310421047513778063246676\n89261670696623633820136378418383684178734361726757\n28112879812849979408065481931592621691275889832738\n44274228917432520321923589422876796487670272189318\n47451445736001306439091167216856844588711603153276\n70386486105843025439939619828917593665686757934951\n62176457141856560629502157223196586755079324193331\n64906352462741904929101432445813822663347944758178\n92575867718337217661963751590579239728245598838407\n58203565325359399008402633568948830189458628227828\n80181199384826282014278194139940567587151170094390\n35398664372827112653829987240784473053190104293586\n86515506006295864861532075273371959191420517255829\n71693888707715466499115593487603532921714970056938\n54370070576826684624621495650076471787294438377604\n53282654108756828443191190634694037855217779295145\n36123272525000296071075082563815656710885258350721\n45876576172410976447339110607218265236877223636045\n17423706905851860660448207621209813287860733969412\n81142660418086830619328460811191061556940512689692\n51934325451728388641918047049293215058642563049483\n62467221648435076201727918039944693004732956340691\n15732444386908125794514089057706229429197107928209\n55037687525678773091862540744969844508330393682126\n18336384825330154686196124348767681297534375946515\n80386287592878490201521685554828717201219257766954\n78182833757993103614740356856449095527097864797581\n16726320100436897842553539920931837441497806860984\n48403098129077791799088218795327364475675590848030\n87086987551392711854517078544161852424320693150332\n59959406895756536782107074926966537676326235447210\n69793950679652694742597709739166693763042633987085\n41052684708299085211399427365734116182760315001271\n65378607361501080857009149939512557028198746004375\n35829035317434717326932123578154982629742552737307\n94953759765105305946966067683156574377167401875275\n88902802571733229619176668713819931811048770190271\n25267680276078003013678680992525463401061632866526\n36270218540497705585629946580636237993140746255962\n24074486908231174977792365466257246923322810917141\n91430288197103288597806669760892938638285025333403\n34413065578016127815921815005561868836468420090470\n23053081172816430487623791969842487255036638784583\n11487696932154902810424020138335124462181441773470\n63783299490636259666498587618221225225512486764533\n67720186971698544312419572409913959008952310058822\n95548255300263520781532296796249481641953868218774\n76085327132285723110424803456124867697064507995236\n37774242535411291684276865538926205024910326572967\n23701913275725675285653248258265463092207058596522\n29798860272258331913126375147341994889534765745501\n18495701454879288984856827726077713721403798879715\n38298203783031473527721580348144513491373226651381\n34829543829199918180278916522431027392251122869539\n40957953066405232632538044100059654939159879593635\n29746152185502371307642255121183693803580388584903\n41698116222072977186158236678424689157993532961922\n62467957194401269043877107275048102390895523597457\n23189706772547915061505504953922979530901129967519\n86188088225875314529584099251203829009407770775672\n11306739708304724483816533873502340845647058077308\n82959174767140363198008187129011875491310547126581\n97623331044818386269515456334926366572897563400500\n42846280183517070527831839425882145521227251250327\n55121603546981200581762165212827652751691296897789\n32238195734329339946437501907836945765883352399886\n75506164965184775180738168837861091527357929701337\n62177842752192623401942399639168044983993173312731\n32924185707147349566916674687634660915035914677504\n99518671430235219628894890102423325116913619626622\n73267460800591547471830798392868535206946944540724\n76841822524674417161514036427982273348055556214818\n97142617910342598647204516893989422179826088076852\n87783646182799346313767754307809363333018982642090\n10848802521674670883215120185883543223812876952786\n71329612474782464538636993009049310363619763878039\n62184073572399794223406235393808339651327408011116\n66627891981488087797941876876144230030984490851411\n60661826293682836764744779239180335110989069790714\n85786944089552990653640447425576083659976645795096\n66024396409905389607120198219976047599490197230297\n64913982680032973156037120041377903785566085089252\n16730939319872750275468906903707539413042652315011\n94809377245048795150954100921645863754710598436791\n78639167021187492431995700641917969777599028300699\n15368713711936614952811305876380278410754449733078\n40789923115535562561142322423255033685442488917353\n44889911501440648020369068063960672322193204149535\n41503128880339536053299340368006977710650566631954\n81234880673210146739058568557934581403627822703280\n82616570773948327592232845941706525094512325230608\n22918802058777319719839450180888072429661980811197\n77158542502016545090413245809786882778948721859617\n72107838435069186155435662884062257473692284509516\n20849603980134001723930671666823555245252804609722\n53503534226472524250874054075591789781264330331690");

//find the longest collatz sequence for a starting number under 1 million
function CollatzSequence(num) {
	var sequenceArray = [num];
	while (num != 1) {
		if (num % 2 == 0) {
			sequenceArray.push(num/2);
			num = num /2;
		} else {
			sequenceArray.push((3*num)+1)
			num = (3*num)+1;
		}
	}
	return sequenceArray;
}

function LongestChain() {
	var currentMax = 0;
	var magicNumber = 0;
	for (i=1;i<1000000;i++) {
		if (CollatzSequence(i).length > currentMax) {
			currentMax = CollatzSequence(i).length;
			magicNumber = i;
		}
	}
	console.log("Winner is",magicNumber,"Chain length", currentMax)
}

// find the sum of the digits of the number 2^1000
// SOLVED: 1366 is the answer of adding the digits
// 10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376 is the 2^1000
// Presumably this function would work for any number < 10 and exponent
function fullPower(num,exponent) {
	var powerArray = [num];
	var remainder = 0;
	for (var i=0;i<exponent-1;i++) {
		var currentPower = powerArray[powerArray.length - 1].toString().split("").map(Number);
		console.log("current power to be multiplied",currentPower)
		var newPower = []; 
		for (var j=currentPower.length-1;j>=0;j--) {
			console.log("currentPower:",currentPower[j],"j",j)
			// if it equals 0
			if (currentPower[j] == 0) {
				if (remainder == 0) {
					newPower.unshift(0)
				} else {
					newPower.unshift(remainder)
				}
				remainder = 0;
			} else if (currentPower[j] * num + remainder >= 10 && j == 0) {
				//if its the last number
				finalNumberArray = (currentPower[j] * num + remainder).toString().split("").map(Number)
				for (var h=finalNumberArray.length-1;h>=0;h--) {
					console.log("adding final number", finalNumberArray[h])
					newPower.unshift(finalNumberArray[h])
				}
				console.log("final num",finalNumberArray)
			} else if (currentPower[j] * num + remainder < 10) {
				//if the product is less then 10
				console.log("< 10 ", (currentPower[j] * num) + remainder, "remainder:",remainder,"currentPower", currentPower[j])
				console.log(currentPower[j],(currentPower[j] * num) + remainder, "is less than 10")
				newPower.unshift(currentPower[j] * num + remainder);
				remainder = 0;	
			} else {
				// if the product is greater than 10 and has a remainder
				var newValue = currentPower[j] * num + remainder; 
				newPower.unshift(parseInt(newValue.toString().charAt(newValue.toString().length-1)))
				console.log(currentPower[j] * num + remainder,"> 10 ","remainder",remainder)
				remainder = parseInt(newValue.toString().charAt(0))
				console.log("newPower is now:",newPower,"newValue",newValue,"new Remainder",remainder)
			}
		}
		remainder = 0;
		console.log("new Power",newPower.join(""));
		powerArray.push(newPower.join(""))
	}
	console.log("Answer:",powerArray[powerArray.length-1], "Computed:",Math.pow(num,exponent))
	return powerArray[powerArray.length-1];
}

function addDigits(number) {
	var digitsArray = number.split("").map(Number);
	var total = 0;
	for (var i=0;i<digitsArray.length;i++) {
		total += digitsArray[i];
	}
	console.log(total)
	return total;
}

// addDigits(fullPower(9,100));

// how man letters are used in writing out all the numbers from 1 to 1000
function numToWords(num) {
	numString = "";
	if (num <= 19) {
		numString += onesTeens(num);
	} else if (num >= 20 && num <= 99) {
		var tens = parseInt(num.toString().charAt(0));
		var ones = parseInt(num.toString().charAt(1))
		numString = twentyToHundred(tens) + " " + onesTeens(ones);
	} else if (num > 99 && num <= 999) {
		var onesInt = parseInt(num.toString().charAt(2));
		var tensInt = parseInt(num.toString().charAt(1));
		var hundredsInt = parseInt(num.toString().charAt(0));
		var tenOneInt = parseInt(num.toString().charAt(1) + num.toString().charAt(2))
		if (tensInt >= 2) {
			// console.log("Big tens, hundred", hundredsInt)
			numString = hundreds(hundredsInt) + " and " + twentyToHundred(tensInt) + " " + onesTeens(onesInt);
		} else if (tensInt < 2) {
			// console.log("Small tens, hundred", hundredsInt, tenOneInt)
			if (tenOneInt == 0) {
				numString = hundreds(hundredsInt);
			} else {
				numString = hundreds(hundredsInt) + " and " + onesTeens(tenOneInt);
			}
		}
	} else if (num === 1000) {
		return "one thousand"
	}
	function hundreds(num) {
		// console.log("fetching hundreds")
		if (num == 1) {
			return "one hundred"
		} else if (num == 2) {
			return "two hundred";
		} else if (num == 3) {
			return "three hundred";
		} else if (num == 4) {
			return "four hundred";
		} else if (num == 5) {
			return "five hundred";
		} else if (num == 6) {
			return "six hundred";
		} else if (num == 7) {
			return "seven hundred";
		} else if (num == 8) {
			return "eight hundred";
		} else if (num == 9) {
			return "nine hundred";
		}
	}
	function twentyToHundred(num) {
		if (num == 2) {
			return "twenty";
		} else if (num == 3) {
			return "thirty";
		} else if (num == 4) {
			return "forty";
		} else if (num == 5) {
			return "fifty";
		} else if (num == 6) {
			return "sixty";
		} else if (num == 7) {
			return "seventy";
		} else if (num == 8) {
			return "eighty";
		} else if (num == 9) {
			return "ninety";
		}
	}
	function onesTeens(num) {
		if (num == 0) {return ""}
		if (num == 1) {return "one";
		} else if (num == 2) {return "two";
	 	} else if (num == 3) {return "three";
		} else if (num == 3) {return "three";
		} else if (num == 4) {return "four";
		} else if (num == 5) {return "five";
		} else if (num == 6) {return "six";
		} else if (num == 7) {return "seven";
		} else if (num == 8) {return "eight";
		} else if (num == 9) {return "nine";
		} else if (num == 10) {return "ten";
		} else if (num == 11) {return "eleven";
		} else if (num == 12) {return "twelve";
		} else if (num == 13) {return "thirteen";
		} else if (num == 14) {return "fourteen";
		} else if (num == 15) {return "fifteen";
		} else if (num == 16) {return "sixteen";
		} else if (num == 17) {return "seventeen";
		} else if (num == 18) {return "eighteen";
		} else if (num == 19) {return "nineteen";} 
	}
	console.log(numString)
	return numString;
}

function countLetters(string) {
	return string.match(/[a-z]/gi).length
}

function numberLetterCounts() {
	var totalLetterCount = 0;
	for (var i=1;i<=1000;i++) {
		totalLetterCount += countLetters(numToWords(i));
		console.log("Adding",i,"Answer:",totalLetterCount, countLetters(numToWords(i)))
	}
}

// countLetters(numToWords(969))

// numberLetterCounts();

// Counting Sundays, how many sundays fell on the first of the month during the twentieth century
function CountingSundays() {
	var currentWeekDay = 3;
	var currentMonth = 1;
	var currentMonthDate = 1;
	var currentYear = 1901;
	var firstSundayCount = 0;
	var leapYearArray = [];
	while (currentYear != 2001) {
		increaseWeekDay();
		increaseMonthDate();
		console.log(currentMonth,currentMonthDate,currentYear, currentWeekDay)
		if (currentMonthDate == 1 && currentWeekDay == 1) {
			firstSundayCount++;
			console.log("found a sunday:",currentMonth, currentYear,firstSundayCount);
		}
	}
	function increaseWeekDay(){
		// increase weekday, 1 being Sunday
		if (currentWeekDay == 7) {currentWeekDay = 1;}
		else {currentWeekDay++}
	}
	function increaseMonthDate() {
		if (currentMonth == 1 && currentMonthDate == 31) {
			currentMonth = 2;
			currentMonthDate = 1;
		} else if (currentMonth == 2 && currentMonthDate == 28 && currentYear % 4 != 0) {
			// feb and not a leap year
			currentMonth = 3;
			currentMonthDate = 1;
		} else if (currentMonth == 2 && currentMonthDate == 29 && currentYear % 4 == 0) {
			// feb and a leap year, extra day, keep track with array to make sure it is calculating correctly
			leapYearArray.push(currentYear)
			currentMonth = 3;
			currentMonthDate = 1;
		} else if (currentMonth == 3 && currentMonthDate == 31) {
			// last day of march
			currentMonth = 4;
			currentMonthDate = 1;
		} else if (currentMonth == 4 && currentMonthDate == 30) {
			// last day of April
			currentMonth = 5;
			currentMonthDate = 1;
		} else if (currentMonth == 5 && currentMonthDate == 31) {
			// last day of 
			currentMonth = 6;
			currentMonthDate = 1;
		} else if (currentMonth == 6 && currentMonthDate == 30) {
			currentMonth = 7;
			currentMonthDate = 1;
		} else if (currentMonth == 7 && currentMonthDate == 31) {
			currentMonth = 8;
			currentMonthDate = 1;
		} else if (currentMonth == 8 && currentMonthDate == 31) {
			currentMonth = 9;
			currentMonthDate = 1;
		} else if (currentMonth == 9 && currentMonthDate == 30) {
			currentMonth = 10;
			currentMonthDate = 1;
		} else if (currentMonth == 10 && currentMonthDate == 31) {
			currentMonth = 11;
			currentMonthDate = 1;
		} else if (currentMonth == 11 && currentMonthDate == 30) {
			currentMonth = 12;
			currentMonthDate = 1;
		} else if (currentMonth == 12 && currentMonthDate == 31) {
			// last day of December, increase new year
			currentMonth = 1;
			currentMonthDate = 1;
			currentYear++;
		} else {
			currentMonthDate++;
		}
	}
	console.log(leapYearArray, firstSundayCount)
}

CountingSundays()
