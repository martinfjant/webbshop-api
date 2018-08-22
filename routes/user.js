const Router = require('koa-router')
const router = new Router()
const Controller = require("../controllers/user")
const jwt = require("../jwt")



// /USER
router.get("/", Controller.findAll)
router.post("/", Controller.createUser)
// /USER/:ID
router.get("/:id", Controller.findUser)
router.put("/:id", Controller.updateUser)
router.delete("/:id", Controller.deleteUser)


module.exports = router.routes()