const Joi = require("joi");

const eventValidations = {}

// Validation for Event Creation flow
eventValidations.creation = data => {
  const schema = Joi.object({
    
  });
  return schema.validate(data);
};

// Validation for Event register flow

// Validation for Event update flow (Organizer)

// Validation for Event update flow (Admin - Status change)

module.exports = eventValidations;