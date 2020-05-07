// var postHandlerRequest = require("../server/postHandler");
// var requestValidation = postHandlerRequest.validateInputRequest;
// var mocksHTTP = require("node-mocks-http");
// describe('Test, the function "requestValidation()" should exist', () => {
//   test("It should return true", async () => {
//     expect(requestValidation).toBeDefined();
//   });
// });
// describe('Test "requestValidation()" should be a function', () => {
//   test("It should be a function", async () => {
//     expect(typeof requestValidation).toBe("function");
//   });
// });

// describe('function "requestValidation()" should throw error in case of incorrect user inputs', () => {
//   test("requestValidation should throw error in case of wrong input ny user", () => {
//     const next = jest.fn();
//     const req = mocksHTTP.createRequest({
//       bodyContent: {
//         url:
//           "https://www.studentnewsdaily.com/world-current-events/issue-2-trump-has-plan-to-remove-us-dependency-on-china-supply-chain/",
//       },
//     });
//     const res = mocksHTTP.createResponse();
//     requestValidation(req, res, next);
//     // validate HTTP result
//     expect(res.statusCode).toBe(400);
//     expect(res._isJSON()).toBeTruthy();
//     // validate message
//     const json = JSON.parse(res._getData());
//     expect(json.message).toBe("Invalid input");
//   });
// });
