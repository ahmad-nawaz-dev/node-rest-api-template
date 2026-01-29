const User = require("../../models/users");
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    res.status(200).send({
      message: "User deleted successfully",
      deletedUser,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};
module.exports = deleteUser;
