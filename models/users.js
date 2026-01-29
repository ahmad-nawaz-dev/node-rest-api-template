const mongoose = require("mongoose");
const moment = require("moment");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: true,
      select: false,
    },

    birthDate: {
      type: Date,
      required: true,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    socketId: {
      type: String,
      default: null,
    },
    lastSeen: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, response) {
        delete response.password;
        if (response.birthDate) {
          response.birthDate = moment(response.birthDate).format("DD-MM-YYYY");
        }
        return response;
      },
    },
  },
);

const user = mongoose.model("user", userSchema);
module.exports = user;
