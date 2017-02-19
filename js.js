
const button = document.querySelector('.generateBtn');
button.addEventListener("click", randomNumber);

function randomNumber() {

	function generateNumber(lower, upper) {
		var choices = upper - lower + 1;
		var selection = Math.floor(Math.random() * 10 + lower);
		return selection
	}

	document.querySelector('.numbers').innerHTML = generateNumber(1, 10);
}






