var express = require('express');
var bp = require('body-parser');
var fs = require( 'fs' );

var app = express();
var server = app.listen( 3223, function() {
  console.log('Highscore auf Port 3223 gestartet');
});


app.use(function(request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Alow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Alow-Methods', 'content-Type');
  next();
});


//app.use( bp.urlencoded({extended:false}));
app.use( bp.urlencoded({extended:false}) );

var schreibeInsFile = function() {}

  response.end(JSON.stringify( {umfang:u, flaeche:f}) );
