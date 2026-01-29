const User = require("../../models/users");

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("name email password");
    res.status(200).send({ message: "List fetched successfully", users });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = getUsers;
