var movieDb = [
	{title: 'Deadpool', 
	 rating: 4.5, 
	 hasWatched: true},
	{title: 'Silence of the Lambs', 
	 rating: 5, 
	 hasWatched: true},
	{title: 'War Dogs', 
	rating: 0, 
	hasWatched: false},
	{title: 'Star Trek: Beyond', 
	rating: 4.5, 
	hasWatched: true}
];

// movieDb.forEach(function(movie){
// 	if(movie.hasWatched === false){
// 		console.log("You have not seen " + movie.title + " - " + movie.rating + " stars");
// 	} else {
// 		console.log("You have seen " + movie.title + " - " + movie.rating + " stars");

// 	}
// });


movieDb.forEach(function(movie){
 	console.log(buildString(movie));
});

function buildString(movie) {
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}