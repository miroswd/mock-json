const { Router } = require("express");
const userRoutes = require("../../modules/users/routes");
const cryptoRoutes = require("../../modules/crypto/routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/crypto", cryptoRoutes);

module.exports = routes;
