const Joi = require("joi");

const ValidateSendMessage = (data) => {
  const schema = Joi.object({
    content: Joi.string().trim().min(1).required(),
    conversationId: Joi.string().optional(),

    users: Joi.array().items(Joi.string()).min(1).optional(),
  })
    // at least ONE must exist
    .or("conversationId", "users");

  return schema.validate(data);
};

module.exports = {
  ValidateSendMessage,
};
