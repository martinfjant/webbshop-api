const jwt = require("../jwt");

module.exports = (router) => {
    router.use('/user', require('./user'))
    router.use('/item', require('./item'))
    router.use('/order', require('./order'))
    router.post("/auth", async (ctx) => {
      let username = ctx.request.body.username;
      let password = ctx.request.body.password;
  
      if (username === "user" && password === "pwd") {
          ctx.body = {
              token: jwt.issue({
                  user: "user",
                  role: "admin"
              })
          }
      } else {
          ctx.status = 401;
          ctx.body = {error: "Invalid login"}
      }
  });
  }