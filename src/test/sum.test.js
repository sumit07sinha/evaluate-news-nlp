const sum = require("../server/sum");
test("GET method resposne", async () => {
  expect(sum(1, 2)).toBe(3);
});
