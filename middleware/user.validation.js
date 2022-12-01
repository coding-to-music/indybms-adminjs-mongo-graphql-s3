import Joi from "joi";

const userValidations = {}

// Validations for User Login Flow
userValidations.login = data => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().min(6).max(16).required()
  });
  return schema.validate(data);
};

// Validations for User Registration Flow
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

// Validations for User Update Flow
userValidations.updateUser = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(16),
    phone: Joi.string().min(10).max(10),
    email: Joi.string().email(),
    privilege: Joi.string().valid('USER', 'ORGANIZER', 'ADMIN')
  });
  return schema.validate(data);
};

export default userValidations;