// person has x pairs of socks. return the amount of socks they have to draw in a worst case scenario before finding a pair 
// INCOMPLETE: logic is incorrect
function minimumDraws(input) {
	sockTests = input.split("\n").map(Number)
	sockTests.shift();
	for (i=0;i<sockTests.length;i++) {
		if (sockTests[i] == 1) {
			console.log(2)
		} else {
			console.log(sockTests[i] * 2 - 1)
		}
	}
}

minimumDraws("2\n1\n2")

// return the amound of total handshakes that need to happen if all people were to shake hands
// PASSED: 10/10
function handshake(input) {
	handshakeInputs = input.split("\n")
	handshakeInputs.shift();
	for (i=0;i<handshakeInputs.length;i++) {
		var increment = 0;
		totalSum = 0;
		for (j=0;j<handshakeInputs[i];j++) {
			totalSum += increment 
			increment++
		}
		console.log(totalSum)
	}
}

handshake("2\n1\n2")