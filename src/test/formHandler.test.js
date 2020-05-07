const { handleSubmit } = require("../client/js/formHandler");
test("It should return true", async () => {
  expect(typeof handleSubmit).toBe("function");
});
