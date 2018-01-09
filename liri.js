require("dotenv").config();

var fs = require('fs');
var keys = require('./keys.js');

var request = require('request');

var arg = process.argv[2];
// var process = process.argv;


var search = "";

for (var i = 3; i < process.argv.length; i++) {
    search += (process.argv[i] + "+");
}

switch (arg) {
    case "my-tweets":
        tweet();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        random();
        break;
}

function tweet() {
    var keys = require('./keys.js');
    var Twitter = require('twitter');

    var client = new Twitter(keys.twitter);
    var parameter = { screen_name: "HVRMIN12", count: 20 };

    client.get('statuses/user_timeline', parameter, function (error, data) {
        if (error) {
            console.log(error);
        }
        for (i = 0; i < data.length; i++) {
            console.log(data[i].text)
        }
    })
}

function spotify() {
    var keys = require('./keys.js');
    var Spotify = require('node-spotify-api');

    var spotify = new Spotify({
        id: 'bc3d0704f1814a6f871c4c699da74712',
        secret: '8e9e7c9bad194fe896cf56f186b26d73',
    });

    spotify.search({ type: 'track', query: search, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var songInfo = data.tracks.items[0];
        // console.log(data.tracks.items[0]);
        console.log(songInfo.artists[0].name);
        console.log(songInfo.name);
        console.log(songInfo.preview_url);
        console.log(songInfo.album.name);
    


    });
}