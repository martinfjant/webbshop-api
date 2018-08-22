const MongoClient = require("mongodb").MongoClient
const MONGO_URL = "mongodb://user1:user123456@ds062178.mlab.com:62178/webshop"

module.exports = function (app) {
    MongoClient.connect(MONGO_URL)
        .then((connection) => {
            app.users = connection.collection("users")
            console.log("Database connection establishes")
        })
        .catch((err) => console.error(err))
    
}