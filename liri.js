require("dotenv").config();

var fs = require('fs');
var keys = require('./keys');

var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request')

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var arg = process.argv[2]
var process = process.argv;


var search="";

for (var i = 3;i < process.length; i++) {
    search += process[i] + "+";
}

console.log(search);
console.log(data);