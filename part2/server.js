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
  let usrInput = {
    "name": req.params.name,
    "age": req.params.age
  }

  let readArr = fs.readFileSync("./storage.json", "utf8");
  let newArr = JSON.parse(readArr);

  newArr.push(usrInput);

  fs.writeFileSync('./storage.json', JSON.stringify(newArr));

  res.send('The user was appended to file!');
});

//### Challenge 3:
app.get("/:name", function(req, res) {
  var theRecord = fs.readFileSync("./storage.json", "UTF-8");
  let outputUsr = JSON.parse(theRecord);
  for (let i = 0; i < outputUsr.length; i++) {
    if (outputUsr[i].name === req.params.name) {
      res.json(outputUsr[i]);
      return;
    }
  }
  res.sendStatus(400);
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
