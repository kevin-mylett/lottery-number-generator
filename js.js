
const button = document.querySelector('.generateBtn');
button.addEventListener("click", randomNumber);

function randomNumber() {

	let selectedNumbers = [];
	let i = 0;
	var called = false;

	//Generate a random number
	function generateNumber() {
		let randomNum = Math.floor(Math.random() * 59 + 1);
		let string = randomNum.toString();

		//Add leading 0 to string
		if (randomNum < 10) {
			return "0" + string 
		} else {
			return string
		}
	}

	//Generate 6 random numbers, add to array and output to relevant div's
	while (selectedNumbers.length < 6) {
		let newNumber = generateNumber();

		if (selectedNumbers.indexOf(newNumber) === -1) {
			selectedNumbers.push(newNumber);
			document.querySelector('.ball-' + (i + 1)).innerHTML = selectedNumbers[i];
		    i++;
		}
	}

	//Create Sort Button
	//Need to run this just once!
	var button = document.createElement("button");
	button.className +='sortBtn';
	var node = document.createTextNode("Sort Numbers");
	button.appendChild(node);

	var elem = document.querySelector('.buttons');
	elem.appendChild(button);

	// Sort Numbers 
	const sortButton = document.querySelector('.sortBtn');
	sortButton.addEventListener('click', sortNumbers);

	function sortNumbers() {
		selectedNumbers = selectedNumbers.sort(function (a, b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
		}});

		for (var i = 0; i < 6; i++) {
			document.querySelector('.ball-' + (i + 1)).innerHTML = selectedNumbers[i];
		}
	}
}