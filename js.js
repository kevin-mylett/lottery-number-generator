
const button = document.querySelector('.generateBtn');
button.addEventListener("click", randomNumber);

function randomNumber() {

	function generateNumber() {
		return Math.floor(Math.random() * 59 + 1);
	}

	var selectedNumbers = [];
	var i= 0;

	while (selectedNumbers.length < 6) {
		var newNumber = generateNumber();

		if (selectedNumbers.indexOf(newNumber) === -1) {
			selectedNumbers.push(newNumber);
		    i++;
		} 
	}

	/*Need to place each number in the array in it's own div or span element*/
	document.querySelector('.numbers').innerHTML = selectedNumbers[0] + ' ' + selectedNumbers[1] + ' ' + selectedNumbers[2] + ' ' + selectedNumbers[3] + ' ' + selectedNumbers[4] + ' ' + selectedNumbers[5];
}