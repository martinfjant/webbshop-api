const Router = require("koa-router");
const router = new Router();
const Controller = require("../controllers/item");
const jwt = require("../jwt");

// /ITEM
router.post("/", jwt.jwt, Controller.createItem);
// /ITEM/:ID
router.put("/:id", Controller.updateItem);
router.delete("/:id", Controller.deleteItem);

module.exports = router.routes();
