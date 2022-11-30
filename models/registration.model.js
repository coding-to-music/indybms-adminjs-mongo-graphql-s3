const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ,
});

module.exports = mongoose.model('Registration', RegistrationSchema);