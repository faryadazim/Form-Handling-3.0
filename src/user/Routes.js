var express = require("express");
var router = express.Router();

// define the home page route
router.get("/", function (req, res) {
  res.send("Route home page");
});
// define the about route
router.get("/about", function (req, res) {
  res.send("About Routes");
});

module.exports = router;
