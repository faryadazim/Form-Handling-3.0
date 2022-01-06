const express = require("express");
const app = express();
const port = process.env.port || 3000;
var bodyParser = require("body-parser");
var cors = require("cors");

// __________MidcdleWare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// __________Home Page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// __________Routes
const routes = require("./src/user/Routes");
app.use("/routes", routes);

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});
