const express = require("express");
const fileUpload = require("express-fileupload");

// ROUTES INITIALIZE
const userRoutes = require("./user");
const serviceRoute = require("./service");

// Middleware
module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(fileUpload());

  // ROUTES USE IN EXPRESS
  app.use("/users", userRoutes);
  app.use("/service", serviceRoute);

  // To test the server is working or not
  app.get("/", (req, res) => {
    res.send("Server is working");
  });
};
