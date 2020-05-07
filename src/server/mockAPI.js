let json = {
  title: "test json response",
  message: "this is a message",
  time: "now",
};

module.exports = json;
const app = require("./app");

app.listen(8080, function () {
  console.log("Server starts on port 8080");
});
