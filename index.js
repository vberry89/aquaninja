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
app.set('port', (process.env.PORT || 5000));

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + file, 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

