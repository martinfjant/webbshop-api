const Item = require("../models/Item")
 
// Fetch all Items from the database and return as payload
 async function findAll (ctx) {
   ctx.body = await Item.find({})
 }

 //Find Item by ID

 async function findItem (ctx) {
    ctx.body = await Item.findById(ctx.params.id)
 }

 //Fetch all by tag

 async function findByTag (ctx) {
    console.log(ctx.params.tag)
     ctx.body = await Item.find({categories: ctx.params.tag})
 }


// Create a new Item from the payload body and save it into mongo
 async function createItem (ctx) {
     const newItem      = new Item(ctx.request.body)
     const savedItem    = await newItem.save()
     ctx.body           = savedItem
 }

// Find Item by id from payload and delete it
 async function deleteItem (ctx) {
     const Item     = await Item.findById(ctx.params.id)
     const delItem  = await Item.remove()
     ctx.body       = delItem
 }

 //Update Item
async function updateItem (ctx) {
    console.log('Not supported yet')
}

//Show only names
async function testController (ctx) {
    let foo = await Item.find({})
    ctx.body = foo.map(bar => bar.name + " " + bar.cost)
}
 
 module.exports = {
     findAll,
     findItem,
     findByTag,
     createItem,
     deleteItem,
     updateItem,
     testController
 }