var dotenv = require("dotenv")
dotenv.config();
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser")
var dbConnection = require("./src/config/Db")
dbConnection()
const port = process.env.PORT || 4000;
var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))




var imageRoute = require('./src/imageProject/imageRoutes')
var adminRoute = require('./src/imageProject/imageRoutes')

app.get("/", function (req, res) {
  res.send("Server is working");
});

app.use("/imageProject",imageRoute)
app.use("/admin",adminRoute)


// server port listener
app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is working on port, ${port}`);
  }
});
