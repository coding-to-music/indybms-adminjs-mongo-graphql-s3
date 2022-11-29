const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  privilege: {
    type: String,
    enum: ['USER', 'ORGANIZER', 'ADMIN'],
    default: 'USER'
  },
  createdEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
  registeredEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
});

module.exports = mongoose.model('User', UserSchema);