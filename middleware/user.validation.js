const Joi = require("joi");

const userValidations = {}

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

module.exports = userValidations;