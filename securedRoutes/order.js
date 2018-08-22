const Router = require('koa-router')
const router = new Router()
const Controller = require("../controllers/order")
const jwt = require("../jwt")



// /ORDER
router.get("/",  Controller.findAll)
router.post("/", Controller.newOrder)
// /ORDER/:USER
router.get("/:user", Controller.findByUser)
// /ORDER/SHIP+PAY/:ID
router.put("/ship/:id", Controller.deliverOrder)
router.put("/pay/:id", Controller.payOrder)



module.exports = router.routes()