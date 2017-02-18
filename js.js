function randomNumber(lower, upper) {
	var choices = upper - lower + 1;
	var selection = Math.floor(Math.random() * 10 + lower);
	console.log(selection);
}