var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  productName: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
  },
});

var product = mongoose.model("products", productSchema);
module.exports = product;
