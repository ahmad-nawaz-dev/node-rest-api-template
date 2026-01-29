const User = require("../../models/users");
const { ValidateUser } = require("../../validations/userValidator");
const bcrypt = require("bcrypt");

const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = ValidateUser(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    if (req.body.dob) {
      req.body.birthDate = new Date(req.body.birthDate);
      delete req.body.dob;
    }

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ message: "User updated successfully", user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = updateUser;
