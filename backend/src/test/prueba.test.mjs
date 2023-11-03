import request from 'supertest';
import express from 'express'

const app = express()




describe("GET /api/products", () => {
  it("Devolveria todas las ventas", async () => {
    const response = await request(app).get("/api/ventas");
    expect(response.statusCode).toEqual(200);
  });

});
