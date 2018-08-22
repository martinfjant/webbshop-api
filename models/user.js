const mongoose = require('mongoose')
    
// User schema
const UserSchema = new mongoose.Schema(
    {
    "name": {type: String},
    "email": {type: String},
    "password": {type: String},
    "adress": {type: String}
    }
)


const User = mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')