const User = require("../../models/users");
const { ValidateUser } = require("../../validations/userValidator");
const bcrypt = require("bcrypt");
const { SEND_EMAIL } = require("../../utils/sendEmail");
const welcomeTemplate = require("../../templates/welcome");

const addUser = async (req, res) => {
  try {
    const { error } = ValidateUser(req.body, "add");

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      ...req.body,
      password: hashedPassword,
      birthDate: new Date(req.body.dob),
    });

    await user.save();
    const html = await welcomeTemplate(user);

    await SEND_EMAIL({
      send_to: user.email,
      subject: "Welcome to Our System",
      html,
      attachments: [
        {
          filename: "welcome.txt",
          content: "Welcome! Your account has been created successfully.",
        },
      ],
    });
    res.status(200).send({
      message: "User added successfully",
      user,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = addUser;
