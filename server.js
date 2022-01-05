const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
const port = process.env.port || 3001;
var dbConnection = require("./src/config/db");
dbConnection();

// MiddleWare
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// Rendering

app.get("/", (req, res) => {
  res.send("Server is working!");
});

// Routes
var routes = require("./src/user/Routes");
app.use("/routes", routes);

app.listen(port, () => {
  try {
    console.log(`CRUD App listening at http://localhost:${port}`);
  } catch (error) {
    console.log("Error :", error);
  }
});
