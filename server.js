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

function getWord(theNum) {
  console.log("made it to getword");
  request('http://www.wordbyletter.com/words_starting_with.php?q=a&letters='+theNum, function (error, response, body) {
    if (error) {
      return console.error(err)
    };
    const $ = cheerio.load(body)
    var randword = $('h2').each(function(){
            var words = (this.next.next.data);
            //console.log(typeof words)
            var wordsArray = words.split(",")
            //console.log(typeof wordsArray);
            //console.log(wordsArray);
            return wordsArray[Math.floor(Math.random()*wordsArray.length)];
            //console.log(randword);
    }).then(
      console.log(randword);
    );
  });

    console.log("-----------");
    console.log("made it through getword yo");
  }

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/', function(req, res) {
  var num = parseInt(req.body.numberOfLetters);
  var theRandomWord = getWord(num);
  console.log(theRandomWord);
  res.json(theRandomWord);
});

// Starts our server
app.listen(PORT, function() {
  console.log('Server is listening on PORT: ' + PORT);


});
