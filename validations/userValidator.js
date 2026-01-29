const Joi = require("joi");

const ValidateUser = (data, type) => {
  let schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(11).required(),
    status: Joi.boolean(),
    role: Joi.string().valid("user", "admin"),
    dob: Joi.date().less("now"),
  });

  if (type === "add") {
    schema = schema.append({
      password: Joi.string().min(6).required(),
    });
  }

  return schema.validate(data);
};

/* ================= LOGIN USER ================= */
const ValidateLogin = (data) => {
  const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return userLoginSchema.validate(data);
};

module.exports = {
  ValidateUser,
  ValidateLogin,
};
