
let runOnce = false;

//Generate a random number
function generateNumber() {
	let randomNum = Math.floor(Math.random() * 59 + 1);
	let string = randomNum.toString();

	//Add leading 0 to string
	if (randomNum < 10) {
		return "0" + string; 
	} else {
		return string;
	}
}

function randomNumber() {

	const numbersContainer = document.querySelector('.numbers');
	let selectedNumbers = [];
	
	//Generate 6 random numbers. If number is not a duplicate, add to selectedNumbers array.
	while (selectedNumbers.length < 6) {
		let newNumber = generateNumber();
		let i = 0;

		if (selectedNumbers.indexOf(newNumber) === -1) {
			selectedNumbers.push(newNumber);
		    i++;
		}
	}

	//Empty .numbers div to allow for re-generation of numbers
	numbersContainer.innerHTML = "";

	//Populate .numbers div with selectedNumbers array
	selectedNumbers.forEach((selectedNumber, index) => {
		let ball = document.createElement('div');
		ball.className += 'balls ball-' + (index + 1);
		ball.innerHTML = selectedNumber;
		numbersContainer.appendChild(ball);
	});

	//Create Sort Button
	if (!runOnce) {
		let button = document.createElement("button");
		button.className +='sortBtn';
		button.innerHTML = 'Sort Numbers';

		const buttonsDiv = document.querySelector('.buttons');
		buttonsDiv.appendChild(button);

		// Update flag so function is run once
		runOnce = true;
	}

	function sortNumbers() {
		selectedNumbers = selectedNumbers.sort(function (a, b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
			}
		});

		for (var i = 0; i < 6; i++) {
			document.querySelector('.ball-' + (i + 1)).innerHTML = selectedNumbers[i];
		}
	}

	// //Sort Numbers 
	const sortButton = document.querySelector('.sortBtn');
	sortButton.addEventListener('click', sortNumbers);

}

const button = document.querySelector('.generateBtn');
button.addEventListener("click", randomNumber);