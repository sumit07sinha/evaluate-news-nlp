var path = require("path");
var express = require("express");
var app = express();
const mockAPI = require("./mockAPI");
var bodyParser = require("body-parser");
var postRequest = require("./postHandler");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPI);
});
// Post
app.post("/article", postRequest.inputValidation, postRequest.handlePost);

module.exports = app;
