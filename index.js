var express = require('express');
var app = express();
app.use(express.static("frontendnew"));
var fs = require("fs");
//var foo = require('/Users/vsk/Desktop/aquaninja/aquaninja/backend/json/users.json');
var file = "/json/users.json";
var alexa = "json/alexa.json";
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + file, 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/', function (req, res) {
    console.log(__dirname);
    fs.readFile( __dirname + "/frontendnew/index.html", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})
app.get('/index', function (req, res) {
    console.log(__dirname);
    fs.readFile( __dirname + "/frontendnew/index.html", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/challenge', function (req, res) {
   fs.readFile( __dirname + "/frontendnew/challenge.html", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/dashboard', function (req, res) {
   fs.readFile( __dirname + "/frontendnew/dashboard.html", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/results', function (req, res) {
   fs.readFile( __dirname + "/frontendnew/result.html", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/alexa', function (req, res) {

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

