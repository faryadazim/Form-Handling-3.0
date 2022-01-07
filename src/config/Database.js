const mongoose = require("mongoose");

function DbConneecton() {
  mongoose.connect(
    "mongodb+srv://faryaduser:faryaduser123@cluster0.tfvhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully Connected");
      }
    }
  );
}
module.exports = DbConneecton;
