var express = require('express');
var app = express();
var fs = require("fs");
//var foo = require('/Users/vsk/Desktop/aquaninja/aquaninja/backend/json/users.json');
var file = "/json/users.json";
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + file, 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + file, 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})