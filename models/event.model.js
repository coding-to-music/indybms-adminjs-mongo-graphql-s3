const { boolean } = require('joi');
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
    type: String,
    required: true
  },
  // User information who registered for the event
  registrations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  // Maximum number of allowed registrations
  maxAllowedRegistrations: {
    type: [Number],
    required: true
  },
  // Event Poster
  coverImage: {
    type: String,
    required: true
  },
  // Event gallery
  gallery: [
    {
        type: String,
    }
  ],
  // Latitude, Longitude
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
  // Event Start Date and Time
  startDateTime: {
    type: Date,
    default: Date.now 
  },
  // Checks if a Event is multi-day or not
  isStartEndSame:{
    type: Boolean
  },
  // Event End Date and Time
  endDateTime: {
    type: Date,
    default: Date.now 
  },
  // Age Restriction
  ageRestriction: {
    type: Number,
    required: true
  },
  // ID Requirement
  idRequired: {
    type: Boolean
  },
  // Event Status
  status: {
    type: String,
    enum: ['PENDING', 'REJECTED', 'APPROVED', 'COMPLETED', 'UPCOMING', 'INPROGRESS'],
    default: 'PENDING'
  },
  // Event Registration Fee
  registrationFee: {
    type: Number,
    required: true
  },
  // Owner details
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Event', EventSchema);