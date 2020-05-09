const app = require("../server/app");
test("GET method resposne", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
});

test("GET method resposne", async () => {
  const response = await request(app).get("/test");
  expect(response.statusCode).toBe(200);
});
