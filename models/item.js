const mongoose = require('mongoose')
    
// Item schema
const ItemSchema = new mongoose.Schema(
{
    "name": {type: String},
    "description": {type: String},
    "cost": {type: Number},
    "image": {type: String},
    "categories": [{type: String}]
}
)


const Item = mongoose.model('Item', ItemSchema)

module.exports = mongoose.model('Item')