var express = require("express");
var router = express.Router();

// Import the model
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   res.redirect("/home");
// });

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", function(req, res) {
  burger.create(req.body.burger_name, function(data) {
    console.log(data);
  res.redirect("/");
    });
});

router.post("/burger/eat/:id", function(req, res) {
  burger.update(req.params.id, function(data) {
    console.log(data);
    res.redirect("/");
  });
});

router.post('/burger/delete/:id', function (req, res) {
  // console.log(req.params.id)
  burger.delete(req.params.id, function (data) {
    console.log(data);
    res.redirect("/");
  });
});
// burger.delete("burgers", req.params.id, function (data) {
// Export routes for server.js to use.
module.exports = router;
