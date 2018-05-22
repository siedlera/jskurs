var http = require('http');
var fs = require( 'fs' );

http.createServer( function( request, response ) {
  console.log('Anfrage an Server gestellt');
  console.log( request );
  //response.end( 'Hallo Du' );

  fs.readFile( 'jquery-3.3.1.min.js', function(err,inhalt) {
    response.end( inhalt );
  })

  if (request.url == '/test.html' ) {
    fs.readFile( 'test.html', function(err,inhalt) {
      response.end( inhalt );
    })
  } else {
    response.writeHead ( 404 );
    response.end( 'error...' );
  }


}).listen( 12345 );
console.log( 'Server ist gestartet' );
