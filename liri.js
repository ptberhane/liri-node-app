'user strict'
var fs = require('fs');
var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require("request");
var userInput = process.argv;
var search = userInput[2];
var movie = process.argv[3];
var track = userInput[3];
var functionsModules = require('./keys.js');

if (search === "my-tweets") {

	functionsModules.myTweets();
}

else if (search === "spotify-this-song"){
	functionsModules.spotifyMusic();
	
}
else if (search ==="movie-this"){
    functionsModules.movieData();
}
else if (search ==="do-what-it-says"){

}

else {
	console.log("Please use 'my-tweets', 'spotify-this-song', 'movie-this' or 'do-what-it-says' ");
}

/*function spotifyMusic() {

	spotify.search({ type:'song'+ track},function(err,data){
		if (err) console.log(err);
		return;
	console.log(JSON.stringify(data[i].search,null,2));	

	});
}

function movieData(){
var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
console.log(queryUrl);

	
	request(queryUrl,function(error, response, body) {
  
  	console.log(body);
 	console.log("The movie was made in " + JSON.parse(body).Year);
  });
}

function myTweets(){
	keys.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);   
  console.log(response); 
});
};


*/


