const Joi = require("joi");

const eventValidation = {}

// Validation for Event Creation
eventValidation.createEvent = data => {
  const schema = Joi.object({
    
  });
  return schema.validate(data);
};

// Validation for Event Update


module.exports = eventValidation;