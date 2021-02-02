const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/hello", async (ctx) => {
  ctx.body = "Hello Hello Hello";
});

router.get("/hello/:id", async (ctx) => {
  ctx.body = `Hello ${ctx.params.id}`;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("server started");
});
