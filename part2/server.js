var express = require('express');
var app = express();
const fs = require('fs');
var port = process.env.PORT || 8000;

//### Challenge 2:
app.get("/", function(req, res) {
  var storage = fs.readFileSync("./storage.json", "UTF-8")
  res.send(storage);
});

//### Challenge 1:
app.post("/create/:name/:age", function(req, res) {
  var usrInput = {
    "name": `${req.params.name}`,
    "age": `${req.params.age}`
  }
  var writeable = JSON.stringify(usrInput);

  fs.appendFile('storage.json', writeable, (err) => {
    if (err) throw err;
    res.send('The "data to append" was appended to file!');
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
