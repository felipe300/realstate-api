import request from "supertest";
import { app } from "../src/app";

describe("GET /api/inmuebles", () => {
  it("debería retornar una lista de inmuebles", async () => {
    const res = await request(app).get("/api/inmuebles");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("direccion");
    expect(res.body[0]).toHaveProperty("precio");
  });
});
