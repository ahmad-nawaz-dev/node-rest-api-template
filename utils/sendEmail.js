const nodemailer = require("nodemailer");

module.exports.SEND_EMAIL = async (data) => {
  const { send_to, subject, html, text, attachments } = data;

  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailDetails = {
    from: process.env.EMAIL_USER,
    to: send_to,
    subject: subject,
    text: text || "Welcome! Your account has been created successfully.",
    html: html,
  };

  if (attachments.length > 0) {
    mailDetails.attachments = attachments;
  }

  try {
    let info = await mailTransporter.sendMail(mailDetails);
    return {
      code: 200,
      message: "Email sent: " + info.response,
    };
  } catch (error) {
    return {
      code: 400,
      message: error.message,
    };
  }
};
