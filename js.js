
const button = document.querySelector('.generateBtn');
button.addEventListener("click", randomNumber);

function randomNumber() {

	function generateNumber(lower, upper) {
		var choices = upper - lower + 1;
		var randomNumber = Math.floor(Math.random() * 10 + lower);
		return randomNumber
	}

	var selectedNumbers = []

	for (let i=0; i < 6; i++) {
		selectedNumbers.push(generateNumber(1, 10));
	}
	/*Need to place each number in the array in it's own div or span element*/
	/*Perform check to stop repeated numbers*/
	document.querySelector('.numbers').innerHTML = selectedNumbers[0] + ' ' + selectedNumbers[1] + ' ' + selectedNumbers[2] + ' ' + selectedNumbers[3] + ' ' + selectedNumbers[4] + ' ' + selectedNumbers[5];
}






