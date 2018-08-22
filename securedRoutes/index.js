const jwt = require("../jwt");
const itemController = require("../controllers/item");

module.exports = securedRouter => {
  securedRouter.use(jwt.errorHandler()).use(jwt.jwt());
  securedRouter.use("/user", require("./user"));
  securedRouter.use("/item", require("./item"));
  securedRouter.use("/order", require("./order"));
};
