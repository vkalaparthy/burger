var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var myBurger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  myBurger.all(function(data) {
    var hbsObject = { // create a handlebars oject that needs to be processed for view
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;