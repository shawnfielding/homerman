// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Create our server
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});;

// Starts our server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
