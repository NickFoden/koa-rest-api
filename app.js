const Koa = require("koa");
const Router = require("@koa/router");
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());

const router = new Router();

app.use(serve(__dirname + "/public"));

router.get("/hello", async (ctx) => {
  ctx.body = "Hello Hello Hello";
});

router.get("/hello/:name", async (ctx) => {
  // To update status code - (default is 200)
  // ctx.status = 100;
  ctx.body = `Hello ${ctx.params.name}`;
});
router.post("/json", async (ctx) => {
  const { name = "World" } = ctx.request.body;
  ctx.body = `Hello ${name}`;
});

router.get("/", async (ctx) => {
  ctx.body = "Worldly Hellos from Koa";
});

// router.get("/", async (ctx) => {
//   serve(__dirname + "/home.html");
// });

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
