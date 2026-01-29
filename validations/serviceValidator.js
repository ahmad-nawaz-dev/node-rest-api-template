const Joi = require("joi");

const ValidateService = (data, type) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(50),
    description: Joi.string().required().min(10),
    price: Joi.number().required().positive(),
    status: Joi.boolean(),
  });

  return schema.validate(data);
};

module.exports = {
  ValidateService,
};
