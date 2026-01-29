const express = require("express");
const router = express.Router();
const addUser = require("../controllers/users/addUser");
const getUsers = require("../controllers/users/getUsers");
const updateUser = require("../controllers/users/updateUser");
const deleteUser = require("../controllers/users/deleteUser");
const detailUser = require("../controllers/users/detailUser");
const loginUser = require("../controllers/users/loginUser");
const registerRoutes = require("../utils/configureRoutes");

const userRoute = [
  {
    method: "post",
    path: "/add",
    handler: addUser,
    auth: ["admin"],
  },
  {
    method: "get",
    path: "/all",
    handler: getUsers,
    auth: ["admin"],
  },
  {
    method: "put",
    path: "/update/:id",
    handler: updateUser,
    auth: ["admin"],
  },
  {
    method: "delete",
    path: "/delete/:id",
    handler: deleteUser,
    auth: ["user"],
  },
  {
    method: "get",
    path: "/detail/:id",
    handler: detailUser,
    auth: ["admin"],
  },
  {
    method: "post",
    path: "/login",
    handler: loginUser,
  },
];
registerRoutes(router, userRoute);
module.exports = router;
