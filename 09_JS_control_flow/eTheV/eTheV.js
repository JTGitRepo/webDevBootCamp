
function person(age) {
	this.age = age;
}
var age = prompt("ID?");

var patron = new person(age);

function enterTheVen(patron) {

var enterVenue, drink;

if (patron.age > 20) {
	enterVenue = true;
	drink = true;
	console.log("Have a great show.");
} else if (patron.age > 17) {
	enterVenue = true;
	drink = false;
	console.log("you can enter but were gonna have to stamp your hand.");

} else {
	enterVenue = false;
	drink = false;
	console.log("Scram kid");
}
}

enterTheVen(patron);
