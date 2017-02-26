
const button = document.querySelector('.generateBtn');
button.addEventListener("click", randomNumber);

function randomNumber() {

	function generateNumber(lower, upper) {
		var choices = upper - lower + 1;
		var randomNumber = Math.floor(Math.random() * 10 + lower);
		return randomNumber
	}

	var selectedNumbers = [];
	var i= 0;

	while (selectedNumbers.length < 6) {
  		var checkNumber = generateNumber(1, 10);
  
		  if (selectedNumbers.includes(checkNumber)) {
		    var checkNumber = generateNumber(1, 10);
		  } else {
		    selectedNumbers.push(checkNumber);
		    i++;
		  }
	}

	/*Prevented repeats in selectedNumbers array using while loop - but not enitrely convinced this is the 'correct' way to do this. 
	**Also need to check includes() support as ES6 feature. indexOf() possible alternative.*/


	/*Need to place each number in the array in it's own div or span element*/
	document.querySelector('.numbers').innerHTML = selectedNumbers[0] + ' ' + selectedNumbers[1] + ' ' + selectedNumbers[2] + ' ' + selectedNumbers[3] + ' ' + selectedNumbers[4] + ' ' + selectedNumbers[5];
}






