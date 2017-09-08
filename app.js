var express = require("express");
var gameController = require("./controllers/gameController");

var app = express();

// set up template engine
app.set("view engine", "ejs");


// little middleware to get static files
app.use(express.static("./public"));


// listen to port
app.listen(3000);
console.log("now I'm listening to port 3000");


// fire controller
gameController(app);
