var express = require("express");
var router = express.Router();

var db = require("../models");

// GET route for getting all of the burgers
//CRUD: Read
router.get("/", function(req, res) {
  // Add sequelize code to find all burgers, and render them to the user.
  //
  console.log("back here for the get");
  db.burger.findAll({}).then(function(dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };
    res.render("index", hbsObject);
  });
});

// POST route for saving a new burger
router.post("/burgers/create", function(req, res) {
  // Add sequelize code for creating a new burger using req.body,
  // then redirecting to the index.
  db.burger
    .create({
      burger_name: req.body.burger_name
    })
    .then(function(dbBurger) {
      res.redirect("/");
    });
});

// PUT route for updating burger
router.put("/:id", function(req, res) {
  console.log("req.body", req.body);
  db.burger
    .update(
      {
        devoured: true
      },
      {
        where: {
          id: req.body.burger_id
        }
      }
    )
    .then(function(dbBurger) {
      res.redirect("/");
    });
});

//exporting to server.js
module.exports = router;
