import { validationOfURL } from "../client/js/urlValidation";
test("it should return true", async () => {
  expect(validationOfURL).toBeDefined();
  expect(typeof validationOfURL).toBe("function");
});

var url =
  "https://www.zdnet.com/article/salesforce-rolls-out-new-low-code-features-for-lightning-app-builder/";
test("it should return true", async () => {
  const response = validationOfURL(url);
  expect(response).toBeDefined();
  expect(response).toBe(true);
});
var wrongURL = "sdbydc";
test("it should return true", async () => {
  const response = validationOfURL(wrongURL);
  expect(response).toBeDefined();
  expect(response).toBe(false);
});
