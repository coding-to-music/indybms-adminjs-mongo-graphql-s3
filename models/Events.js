const mongoose = require('mongoose')
const EventsSchema = new mongoose.Schema({
    title: String,
    description: String
})

module.exports = mongoose.model('Events', EventsSchema)