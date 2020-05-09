require("dotenv").config();
function inputValidation(req, res, next) {
  if (!req.body.text) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }
  return next();
}

function handlePost(req, res, next) {
  var aylien = require("aylien_textapi");
  
  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
  });
  textapi.sentiment(
    {
      url: req.body.text,
    },
    function (error, response) {
      res.send(response);
    }
  );
}
exports.inputValidation = inputValidation;
exports.handlePost = handlePost;
