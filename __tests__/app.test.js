const request = require("supertest");
const server = require("../app");

test("Hello world works", async () => {
  const response = await request(server.callback()).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Worldly Hellos from Koa");
});
