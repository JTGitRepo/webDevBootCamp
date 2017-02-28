// var answer = prompt("Are we there yet?");
// while (answer.toLowerCase() !== 'yes') {
// 	var answer = prompt("Are we there yet?")
// }

// alert("YAY, WE MADE IT!!!")

// VERSION 2

var answer = prompt("Are we there yet?");
while (answer.toLowerCase().indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?")
}

alert("YAY, WE MADE IT!!!")

var str = "hello, how are you?"
var newStr ='';
for (var i = 0; str[i] != " "; i++) {
	newStr += str[i];
} 

console.log(newStr);