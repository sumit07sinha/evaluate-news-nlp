var postHandlerRequest = require("../server/postHandler");
var inputValidationRequest = postHandlerRequest.inputValidation;
var mocksHTTP = require("node-mocks-http");

test("return true or false", async () => {
  expect(inputValidationRequest).toBeDefined();
});

test("return a function", async () => {
  expect(typeof inputValidationRequest).toBe("function");
});

test("inputValidationRequest throw error in case of wrong input entered by user", () => {
  const jestFunction = jest.fn();
  const response = mocksHTTP.createResponse();
  const request = mocksHTTP.createRequest({
    bodyContent: {
      url:
        "https://www.zdnet.com/article/salesforce-rolls-out-new-low-code-features-for-lightning-app-builder/",
    },
  });

  inputValidationRequest(request, response, jestFunction);

  expect(response.statusCode).toBe(400);
  expect(response._isJSON()).toBeTruthy();

  const json = JSON.parse(response._getData());
  expect(json.message).toBe("Invalid input");
});
