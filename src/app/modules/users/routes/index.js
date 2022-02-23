const { Router } = require("express");

const routes = Router();

routes.get("/data", (req, res) => {
  try {
    return res.status(200).json(require("../data"));
  } catch (error) {
    return res.status(500).json({ error: "Deu ruim no servidor" });
  }
});

module.exports = routes;
