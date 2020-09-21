var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var myBurger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  myBurger.all(function(data) {
    const hbsObject = { // create a handlebars oject that needs to be processed for view
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = " id = " + req.params.id;
    const chnageCol_value = " devoured = " + req.body.devoured;
    
    //console.log("condition", condition);
    //console.log(chnageCol_value);

    myBurger.update(chnageCol_value, condition, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

router.post("/api/burgers", function(req, res) {
    myBurger.create("burger_name",  req.body.burger_name, (result) => { 
        res.status(200).end();
    });
  });

// Export routes for server.js to use.
module.exports = router;