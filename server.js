// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')
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

function getWord(theNum) {
  console.log("made it to getword");
  $.get("http://www.wordbyletter.com/words_starting_with.php?q=a&letters=11", function(err, res, body) {
    if (err) {
      return console.error(err)
    };
    $ = cheerio.load(body);
    console.log($('#largemenu').next());
    console.log("made it through getword");
  });
};

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/', function(req, res) {
  var num = parseInt(req.body.numberOfLetters);
  getWord(num);
  res.json(num);
});

// Starts our server
app.listen(PORT, function() {
  console.log('Server is listening on PORT: ' + PORT);


});
