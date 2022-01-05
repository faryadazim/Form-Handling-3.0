var express = require("express");
var router = express.Router();

// const addData = require("./Controller");
// middleware that is specific to this router

// define the home page route
router.get("/", function (req, res) {
  res.send("Route home page");
});
// define the about route
router.post("/user", function (req, res) {
  res.send("About route");
  // addData();
});

module.exports = router;
