var button = document.querySelector('button');
var paragraph = document.querySelector('p');

button.addEventListener('hover', function() {
	paragraph.textContent = "yay, you clicked it!";
	setTimeout(function() {
		paragraph.textContent = "click it again!";

	}, 1000);

})

var lis = document.querySelectorAll('li');
for(var i =0; i < lis.length; i++) {
	lis[i].addEventListener("click", function(){
		this.classList.toggle("h1-styles");
	});
}

// change paragraph after first button click
// paragraph changes to new content after time delay
// asking to click button again after delay
// no one clicks me
//yay you clicked it
// click it again!
// yay you clicked it!
// click it again...

