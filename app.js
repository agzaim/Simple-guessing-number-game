var express = require("express");

var app = express();


// little middleware to get static files
app.use(express.static("./public"));


var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});


var serverAnswers = {"-1": "Your shot is too high", 1: "Your choice is too low", 0: "You got this! Gratulations!"};

var mysteriousNumber = Math.floor(Math.random() * 100 + 1);


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});


app.post("/", urlencodedParser, function(req, res) {

    var diff = Math.sign(mysteriousNumber - req.body.guess);
    res.send(serverAnswers[diff]);

    // picking new number after player's correct guess
    if (diff == 0) {
        mysteriousNumber = Math.floor(Math.random() * 100 + 1);
    }
});


// listen to port
app.listen(3000);
console.log("now I'm listening to port 3000");


