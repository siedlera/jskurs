var express = require('express');
var bp = require('body-parser');
var fs = require( 'fs' );

var app = express();
var server = app.listen( 3008, function() {
  console.log('Server mit Express auf Port 3008 gestartet');
});

/*
app.use(function(request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Alow-Methods', 'Post');
  response.setHeader('Access-Control-Alow-Methods', 'Post');
});
*/

//app.use( bp.urlencoded({extended:false}));
app.use( bp.json() );

app.post( '/circle', function(request, response) {
  console.log('Post Request an Server');
  console.log( request.body );
  var r = request.body.radius;
  var u = 2 * r * Math.PI;
  var f = r * r * Math.PI;
  console.log(u);


  response.end(JSON.stringify( {umfang:u, flaeche:f}) );


});

app.get( '/', function(request, response) {
  response.sendFile( __dirname + '/06/client-kreis.html' );
});

app.get( '/j', function(request, response) {
  response.sendFile( __dirname + '/06/jquery-3.3.1.min.js' );
});
