var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

var serverAnswers = [{answer1: "Your shot is too high"}, {answer2: "Your choice is too low"}, {answer3: "You got this! Gratulations!"}];
var mysteriousNumber = Math.floor(Math.random() * 100 + 1);


module.exports = function(app){

    app.get("/game", function(req, res) {
        res.render("game");
    });

    app.post("/game", urlencodedParser, function(req, res) {
        console.log(req.body);
       res.render("game", {serverAnswers: serverAnswers, playerGuess: req.body, seekingNumber: mysteriousNumber});

    });
};                                                                       