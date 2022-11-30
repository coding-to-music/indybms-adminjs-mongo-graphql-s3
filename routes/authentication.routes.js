const Router = require("express").Router();
const { UserController } = require('../controllers/index')

Router.post("/login", async (req, res) => {
  await UserController.login(req, res);
});

Router.post("/register", async (req, res) => {
  await UserController.register(req, res);
});

module.exports = Router;