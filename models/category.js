const { boolean } = require('joi');
const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  // Name of the Category
  name: {
    type: String,
    required: true
  },
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
});

module.exports = mongoose.model('Event', EventSchema);