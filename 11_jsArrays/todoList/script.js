var todos = ['buy new turtle'];

var input = prompt("What would you like to do?");


while(input !== 'quit') {
		//HANDLE input
	if(input ==="list") {
		listTodos();
	} else if(input === 'new') {
		addTodo();
	} else if(input === "delete") {
		deleteTodos();
	}

	// ask again for new input
	var input = prompt("What would you like to do?");

}
alert("OK, YOU QUIT THE APP")

// function declerations

function listTodos(){
	console.log('******************');
		todos.forEach(function(todo, i) {
			console.log((i+1)+ ". " +todo);
		});
		console.log("******************")
}

function addTodo() {
	// ask for new todo
		var newTodo = prompt("Enter new todo.");
		// add to todos array
		todos.push(newTodo);	
}

function deleteTodos(){
	var index = prompt("what is the item index?") -1;
		//ask for index of todo to be deleted
		//splice() 
		todos.splice(index, 1);

		//delete that todo
}