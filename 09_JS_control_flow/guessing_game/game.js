//create secretNumber
var secretNumber = 4;

//ask user for guess

var guess = Number(prompt("Guess a number"));

//check if guess is right

if (guess === secretNumber) {
	alert("You got it right!");
}

//check if highter

else if (guess > secretNumber) {
	alert("Your guess is too high, man!");
}
else {
	alert("Your geuss is to low.");
}

//otherwise check if lowe


