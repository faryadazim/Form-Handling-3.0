var mongoose = require("mongoose")
function dbConnection() {
  mongoose.connect(
    process.env.mongo,
    { useNewUrlParser: true, useFindAndModify: false , useUnifiedTopology: true},
    function (err) {
      if (err) {
        console.log("err", err)
      } else {
        console.log("successfully connected")
      }
    }
  )
}

module.exports = dbConnection
