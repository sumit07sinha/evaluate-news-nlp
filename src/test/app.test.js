const app = require("../server/app");
const request = require("supertest");
test("GET method resposne", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  const testResponse = await request(app).get("/test");
  expect(testResponse.statusCode).toBe(200);
});
