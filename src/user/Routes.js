var express = require("express");
var router = express.Router();

var { addProduct, deleteProduct, updateProduct } = require("./Controller");
// define the home page route
router.get("/", function (req, res) {
  res.send("Route home page");
});
// define the about route
router.get("/about", function (req, res) {
  res.send("About Routes");
});
router.post("/addProduct", function (req, res) {
  addProduct(req, res);
});
router.delete("/deleteProduct", function (req, res) {
  deleteProduct(req, res);
});
router.put("/updateProduct", function (req, res) {
  updateProduct(req, res);
});

module.exports = router;
