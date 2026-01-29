const User = require("../../models/users");
const detailUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).send({ message: "Detail fetched  Successfully", user });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
module.exports = detailUser;
