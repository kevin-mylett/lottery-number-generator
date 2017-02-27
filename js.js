
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
			document.querySelector('.ball-' + (i + 1)).innerHTML = selectedNumbers[i]
		    i++;
		}

	}
}