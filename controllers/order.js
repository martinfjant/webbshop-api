const Order = require("../models/order")

//Find user with id and then attach it do the order
//Do I need the user? 


async function findAll (ctx) {
    ctx.body = await Order.find({})
}

async function findById (ctx) {
    ctx.body = await Order.findById(ctx.params.id)
}

async function findByUser (ctx) {
    ctx.body = await Order.find({user: ctx.params.user})
}

async function newOrder (ctx) {
    const order = new Order(ctx.request.body)
    ctx.body    = await order.save()
}
    
async function deliverOrder (ctx) {
    const order = await Order.findById(ctx.params.id)
    order.shipped = !order.shipped
    ctx.body = await order.save()
}

async function payOrder(ctx) {
    const order = await Order.findById(ctx.params.id)
    order.paid = !order.paid
    ctx.body = await order.save()
}
 
 module.exports = {
    findAll,
    findById,
    findByUser,
    newOrder,
    deliverOrder,
    payOrder
 }