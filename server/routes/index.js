const { Router } = require("express");
const { authRoute } = require("./auth.route");

const routes = Router();

routes.use("/auth", authRoute);

module.exports.routes = routes;
