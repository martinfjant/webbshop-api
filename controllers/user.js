const User = require("../models/user")
 
// Fetch all users from the database and return as payload
 async function findAll (ctx) {
   ctx.body = await User.find({})
 }

 //Find user by ID

 async function findUser (ctx) {
    ctx.body = await User.findById(ctx.params.id)
 }

// Create a new user from the payload body and save it into mongo
 async function createUser (ctx) {
     const newUser      = new User(ctx.request.body)
     const savedUser    = await newUser.save()
     ctx.body           = savedUser
 }

// Find user by id from payload and delete it
 async function deleteUser (ctx) {
     const user     = await User.findById(ctx.params.id)
     const delUser  = await user.remove()
     ctx.body       = delUser
 }

 //Update user
async function updateUser (ctx) {
   ctx.body = User.findOneAndUpdate({"_id": ctx.params.id}, {"purchases": {$push: {items: ctx.request.body}}})
} 


 module.exports = {
     findAll,
     findUser,
     createUser,
     deleteUser,
     updateUser
 }