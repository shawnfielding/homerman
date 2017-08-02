// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cheerio = require('cheerio');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(`${__dirname}/public/`));

// Create our server
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/', function(req, res) {
  var num = req.body
  //console.log(req.body.);
  console.log(num.numberOfLetters);
  //console.log(num);
  res.json(num.numberOfLetters);
});
// Starts our server
app.listen(PORT, function() {
  console.log('Server is listening on PORT: ' + PORT);
});
