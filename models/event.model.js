const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  // Name of the event
  title: {
    type: String,
    required: true
  },
  // Event description
  description: {
    type: String,
    required: true
  },
  // Event Category
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  // User information who registered for the event
  registrations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Registration'
    }
  ],
  // Maximum number of allowed registrations
  maxAllowedRegistrations: {
    type: Number,
    required: true
  },
  // Event Poster
  coverImage: {
    type: String,
    required: true
  },
  // Event gallery
  gallery: {
    type: [String],
  },
  // Latitude, Longitude
  location: {
    type: [Number],
    required: true,
  },
  // Event Start Date and Time
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  // Age Restriction
  ageRestriction: {
    type: Boolean,
    required: true
  },
  // Event Status
  status: {
    type: String,
    enum: ['PENDING', 'REJECTED', 'APPROVED', 'COMPLETED', 'UPCOMING', 'IN_PROGRESS'],
    default: 'PENDING'
  },
  // Event Registration Fee
  registrationFee: {
    type: Number,
  },
  // Owner details
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);