import Joi from "joi";

const registrationValidations = {}

// Validations for Event registration Flow
registrationValidations.register = data => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    name: Joi.string()
      .required(),
    phone: Joi.string()
      .min(10).max(10)
      .required(),
    user: Joi.string(),
    event: Joi.string().required(),
  });
  return schema.validate(data);
};

export default registrationValidations;