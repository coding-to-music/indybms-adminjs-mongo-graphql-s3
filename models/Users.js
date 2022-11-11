const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema({
    id: Number,
    username: String,
    mobile: Number,
    latitude: String,
    longitude: String,
    type: String
})

module.exports = mongoose.model('Users', UsersSchema)