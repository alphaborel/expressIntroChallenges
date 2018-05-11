var express = require('express');
var app = express();
const fs = require('fs');
var path = require('path');
var port = process.env.PORT || 8000;


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//### Challenge 1:
app.get("/hello", function(req, res) {
  res.send("Hello!");
});

//### Challenge 4:
app.get("/verify/:age", function(req, res) {
  if (`${req.params.age}` > 13) {
    res.sendStatus(200);
  } else if (`${req.params.age}` <= 13) {
    res.sendStatus(403);
  }
});

//### Challenge 2:
app.post("/create/:name", function(req, res) {
  var output = {
    "id": 1,
    "name": `${req.params.name}`
  }
  res.json(output);
})

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
