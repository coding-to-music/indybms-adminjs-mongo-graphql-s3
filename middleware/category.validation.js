import Joi from "joi";

const categoryValidation = {}

// Validations for User Login Flow
categoryValidation.create = data => {
  const schema = Joi.object({
    name: Joi.string()
      .required(),
  });
  return schema.validate(data);
};

export default categoryValidation;