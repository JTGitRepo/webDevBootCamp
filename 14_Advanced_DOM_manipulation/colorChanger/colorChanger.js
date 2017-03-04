// toggle background color with a class

// var body = document.querySelector('body');
var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function() {
	//if white
 	 if(isPurple) {
		//make it purple
		document.body.style.background = "white";
		isPurple = false;
	}
	//else
	else {
		document.body.style.background = "purple";
		// make it white
		isPurple = true;
	}
	// isPurple = !isPurple;
	// body.classList.toggle("toggle-body-background-color");

});