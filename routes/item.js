const Router = require('koa-router')
const router = new Router()
const Controller = require("../controllers/item")
const jwt = require("../jwt")



// /ITEM
router.get("/", Controller.findAll)
router.post("/", jwt.jwt, Controller.createItem)
// /ITEM/:ID
//router.get("/:id", Controller.findItem)
router.put("/:id", Controller.updateItem)
router.delete("/:id", Controller.deleteItem)
// /ITEM/:TAG
router.get("/tag/:tag", Controller.findByTag)

router.get("/test", Controller.testController)


module.exports = router.routes()