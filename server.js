var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var methodOverride = require('method-override')

var port = process.env.PORT || 8889;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOveride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.listen(port, function () {
    console.log("we are running on port " + port)
});
