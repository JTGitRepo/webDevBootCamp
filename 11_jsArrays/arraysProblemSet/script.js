//Array itteration problem set

//	printReverse()

	//function that takes an array and 
	//prints out the elements in
	//reverse dont actually reverse array
	//itself(use loop)

	var array = ['one', 'two', 'three']

	function printReverse(array) {
		for(var i = array.length -1; i >= 0; i--) {
			console.log(array[i])
		}
	}
	printReverse(array);



//	isUniform()

//takes an array as an argument and returns
//true if all eements in the array
//are identical

// var array = [1,1,1,1,1];

// function isUniform(array) {
// 	for(var i = 1; i < array.length; i++){
// 		if(array[i] !== array[0]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// isUniform(array);


function isUniform(arr){ 
var first = arr[0];
var result = arr.forEach(function(element){
	if(element != first) {
		return false;
	} 
})
if(result === false) {
	return result;	
} else {
	return true;
}
}

//sumArray()

//write a function that accepts an array
//of numbers and returns the sum of all 
//numbers in the array

var array = [1,3,4,5];
function sumArray(array) {
	var sum = array[0];
	for(var i = 1;i < array.length; i++) {
		console.log("the sum of " + sum + " plus " + array[i] + " = " + (sum += array[i]));
	}
	return sum;
}

function sumArrayForEach(arr) {
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}




//	max()

var array = [1,2,3,2,1];
function max(array) {
	var max = array[0];
	for(var i = 1; i < array.length; i++) {
		if(array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

max(array);

//accepts an array of numbers and returns
//maximum number in the array

