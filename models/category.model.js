const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  // Name of the Category
  name: {
    type: String,
    required: true
  },
  // Events within a Category
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);