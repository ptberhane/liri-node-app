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
	functionsModules.doThis();

}

else {
	console.log("Please use 'my-tweets', 'spotify-this-song', 'movie-this' or 'do-what-it-says' ");
}

