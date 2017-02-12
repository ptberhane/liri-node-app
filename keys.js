var fs = require('fs');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require("request");
var userInput = process.argv;
var search = userInput[2];
var movie = process.argv[3];
var track = userInput[3];
console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<d53Hzi9DWOtIAVZmUSJsmkt0R>',
  consumer_secret: '<K2sLQ85v10rn7bFuZaQoWe6kbJfaNa2lFwRZQ32vggTqKEojuV>',
  access_token_key: '<830282822896201728-cuh3gNPpz36gcwkZkQAQ9zkamPjXykM>',
  access_token_secret: '<5KW4vQxTqDyvIDpz7ULNetXSn6FplrvF5lMDL35ruwpfK>',
};

function spotifyMusic() {

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

function doThis(){
	fs.readFile('random.txt','utf8',function(err,data){
			spotify.search({ type:'song'+ track})
		if (err) console.log(err);
		return;
	console.log(JSON.stringify(data[i].search,null,2));	

		})	
		
	};


module.exports ={ spotifyMusic,movieData,myTweets,doThis}

