const Joi = require("joi");

const eventValidation = {}

// Validation for Event Creation
eventValidation.createEvent = data => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    maxAllowedRegistrations: Joi.number().min(1).required(),
    coverImage: Joi.string().required(),
    gallery: Joi.array().items(Joi.string()),
    location: Joi.array().items(Joi.number()).required(),
    date: Joi.date().required(),
    ageRestriction: Joi.boolean(),
    registrationFee: Joi.number(),
  });
  return schema.validate(data);
};

// Validation for Event Update
eventValidation.updateEvent = data => {
  const schema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    category: Joi.string(),
    maxAllowedRegistrations: Joi.number().min(1),
    coverImage: Joi.string(),
    status: Joi.string(),
    gallery: Joi.array().items(Joi.string()),
    location: Joi.array().items(Joi.number()),
    date: Joi.date(),
    ageRestriction: Joi.boolean(),
    registrationFee: Joi.number(),
  });
  return schema.validate(data);
};

module.exports = eventValidation;