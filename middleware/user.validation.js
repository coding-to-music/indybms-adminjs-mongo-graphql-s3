const Joi = require("joi");

const userValidations = {}

// Validations for User login flow
userValidations.login = data => {
  const schema = Joi.object({
    username: Joi.string()
      .min(4)
      .max(10)
      .required(),
    password: Joi.string().min(6).max(16).required()
  });
  return schema.validate(data);
};

// Validations for User Registration flow
userValidations.register = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(16)
      .required(),
    password: Joi.string().min(6).max(16).required(),
    phone: Joi.string().min(10).max(10).required(),
    email: Joi.string().email().required()
  });
  return schema.validate(data);
};

module.exports = userValidations;