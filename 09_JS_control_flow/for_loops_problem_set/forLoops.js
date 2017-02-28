// print all numbers between -10 and 19
console.log("\nPRINT ALL NUMBERS BETWEEN -10 AND 19!\n")

for (var i = -10; i <20; i++) {
	console.log(i);
}

// print all even numbers between 10 and 40
console.log("\nPRINT ALL EVEN NUMBERS BETWEEN 10 AND 40.\n")
for (var i = 10; i <= 40; i+=2){
	console.log(i);
}



// print all odd numbers between 300 and 333
console.log("\nPRINT ALL ODD NUMBERS BETWEEN 300 AND 333.\n");
for(var i = 300; i <= 333; i++) {
	if(i % 2 > 0) {
		console.log(i);
	}
}



// print all numbers divisible by 5 AND 3 between 5 and 50
console.log("\n PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50.\N");
for(var i = 5; i <=50;i++){
	if(i % 5 === 0 && i % 3 === 0)
		console.log(i);
}

//ASSIGNMENT SLIDES

console.log("print all even numbers BETWEEN 1 AND 50.\n");

var counter = 1;
while(counter < 50){
	if (counter % 2 ===0){
		console.log(counter);
	}
	counter++;
}


console.log("ASCII TRIANGLE")
	var ascii = '$';

for(var i = 0; i < 10; i++){
	console.log(ascii);
	ascii += '$';
}

//Fizz Buzz

console.log("FIIIIIIIIZZZZ BUUUUUUUUUUUZZZ")
for(var i = 0; i<=100;i++)
	if(i % 5 === 0 && i % 3 === 0){
		console.log("FIZZ BUZZ");
	} else if (i % 3 === 0) {
		console.log("FIZZ");
	} else if (i % 5 === 0) {
		console.log("BUZZ");
	} else {
		console.log(i);
	}



// function myAmount(amount) {
// 	return amount + 5;
// }

// console.log(myAmount(22));

// myAmount = 3;

// var myfunc = function(){
// 	console.log("hello");
// }

// myfunc = 3;

// myfunc();