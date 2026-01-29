const express = require("express");
const router = express.Router();
const addService = require("../controllers/services/addService");
const deleteService = require("../controllers/services/deleteService");
const detailService = require("../controllers/services/detailService");
const serviceList = require("../controllers/services/servicesList");
const updateService = require("../controllers/services/updateService");
const registerRoutes = require("../utils/configureRoutes");

const serviceRoute = [
  {
    method: "post",
    path: "/add_service",
    handler: addService,
    auth: ["admin"],
  },
  {
    method: "get",
    path: "/service_list",
    handler: serviceList,
    auth: ["admin"],
  },
  {
    method: "put",
    path: "/update_service/:id",
    handler: updateService,
    auth: ["admin"],
  },
  {
    method: "delete",
    path: "/delete_service/:id",
    handler: deleteService,
    auth: ["admin"],
  },
  {
    method: "get",
    path: "/detail_service/:id",
    handler: detailService,
    auth: ["admin"],
  },
];
registerRoutes(router, serviceRoute);
module.exports = router;
