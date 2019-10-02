// Your code here!

var randomNumber = Math.floor(Math.random() * 10) + 1;

//For debugging the number generator
//document.getElementById("debug").innerHTML = randomNumber;

document.getElementById("submit").onclick = 
function checkGuess() {
	let guess = document.getElementById("guess");

	if (guess.value == randomNumber) {
		document.getElementById("gameState").innerHTML = "Oikein!!";
		randomNumber = Math.floor(Math.random() * 10) + 1;
	}

	else if (guess.value < randomNumber) {
		document.getElementById("gameState").innerHTML = "Liian pieni.";
	}

	else {
		document.getElementById("gameState").innerHTML = "Liian iso.";
	}
}
