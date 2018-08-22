// My new super awesome webshop API

//Import dependencies
const Koa = require("koa");
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const mongoose = require("mongoose");
const cors = require("@koa/cors");
const helmet = require("koa-helmet");

//Instanciate Koa and Router
const app = new Koa();
const router = new Router();
const securedRouter = new Router();
//Logger
app.use(logger());
app.use(cors());
app.use(helmet());
//Use middleware for JSON-parsing
app.use(BodyParser());

const jwt = require("./jwt");

//Routers

require("./securedRoutes")(securedRouter);
app.use(securedRouter.routes()).use(securedRouter.allowedMethods());
//securedRouter.use(jwt.errorHandler()).use(jwt.jwt());
require("./routes")(router);
app.use(router.routes()).use(router.allowedMethods());

mongoose.connect(
  "mongodb://user1:user123456@ds062178.mlab.com:62178/webshop",
  { useNewUrlParser: true }
);

module.exports = app;
//and go!
