const request = require("supertest");
const app = require("../src/app");

describe("GET /api/realstate", () => {
  it("It should return a list if state", async () => {
    const res = await request(app).get("/api/realstate");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("address");
    expect(res.body[0]).toHaveProperty("price");
  });
});
