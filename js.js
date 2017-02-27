
const button = document.querySelector('.generateBtn');
button.addEventListener("click", randomNumber);

function randomNumber() {

	const selectedNumbers = [];
	let i = 0;

	function generateNumber() {
		let randomNumber = Math.floor(Math.random() * 59 + 1);
		let string = randomNumber.toString();

		if (randomNumber < 10) {
			return "0" + string 
		} else {
			return string
		}
	}

	while (selectedNumbers.length < 6) {
		let newNumber = generateNumber();

		if (selectedNumbers.indexOf(newNumber) === -1) {
			selectedNumbers.push(newNumber);
			document.querySelector('.ball-' + (i + 1)).innerHTML = selectedNumbers[i]
		    i++;
		}
	}
}