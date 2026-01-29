const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("DB connection failed", error);
  });
module.exports = { mongoose };
