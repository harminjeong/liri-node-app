require("dotenv").config();

var fs = require('fs');
var keys = require('./keys.js');

var spotify = require('node-spotify-api');
var request = require('request');


var arg = process.argv[2];
var process = process.argv;


var search="";

for (var i = 3;i < process.length; i++) {
    search += process[i] + "+";
}

switch (arg){
    case "my-tweet":
    tweet ();
    break;
    case "spotify-this-song":
    spot ();
    break;
    case "movie-this":
    movie ();
    break;
    case "do-what-it-says":
    random ();
    break;
}

function tweet () {
    var keys = require('./keys.js');
    var twitter = require('twitter');
    var client = new Twitter(keys.twitter);
    var parameter = {screen_name: hvrmin12, count: 20};
    client.get('statuses/user_timeline', parameter, function(error,data){
        if (error) {
            console.log(error);
        }
        for (i=0; i < data.length;i++) {
        console.log(data)
        }
    })
}

tweet();

console.log(search);
console.log(data);