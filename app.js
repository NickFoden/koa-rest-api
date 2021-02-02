const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/hello", async (ctx) => {
  ctx.body = "Hello Hello Hello";
});

router.get("/hello/:name", async (ctx) => {
  // To update status code - (default is 200)
  // ctx.status = 100;
  ctx.body = `Hello ${ctx.params.name}`;
});

router.get("/", async (ctx) => {
  ctx.body = "Worldly Hellos from Koa";
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
