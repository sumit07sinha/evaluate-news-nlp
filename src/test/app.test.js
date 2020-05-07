const app = require("../server/app");

describe("Testing of root path", () => {
  test("GET method resposne", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("testing of Test path", () => {
  test("GET method resposne", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(200);
    expect(response.body.time).toBe("now");
  });
});
