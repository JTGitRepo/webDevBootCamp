//is even returns true for even numbers and false if odd
var isEven = function(num) {
	return num % 2 === 0;
}
 

 function factorial(num) {
 	// define a result variable
 	var result = 1;
 	//calculate factorial and store value in result
 	for(var i = 2; i <= num; i++) {
 		result *= i;
 	}
 	//return the result variable
 	return result;
 }

 function kebabToSnake(kebab) {
 return kebab.replace(/-/g , "_")
}

