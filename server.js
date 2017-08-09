// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(express.static(`${__dirname}/public/`));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/', function(req, res) {
  var num = parseInt(req.body.numberOfLetters);
  request('http://www.wordbyletter.com/words_starting_with.php?q=a&letters=' + num, function(err, response, body) {
    if (err) {
      return console.error("theres an " + err);
    };
    const $ = cheerio.load(body);
    var wordSet = $('h2').parent().text();
    var wordsArray = wordSet.split(",");
    wordsArray.shift();
    res.json(wordsArray[Math.floor(Math.random() * wordsArray.length)]);
  });
});

// Starts our server
app.listen(PORT, function() {
  console.log('Server is listening on PORT: ' + PORT);


});
