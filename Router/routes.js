const experss = require("express");
const controller = require("../Controller/controller");

const routes = experss.Router();

routes.get("/", controller.localServer);

module.exports = routes;
