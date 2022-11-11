const Router = require("express").Router();
const Controller = require("../controllers/user.controller");

Router.post("/login", async (req, res) => {
  await Controller.login(req, res);
});

Router.post("/register", async (req, res) => {
  await Controller.register(req, res);
});

Router.get("/:id", isLoggedIn, async (req, res) => {
  await Controller.getUser(req, res);
});

module.exports = Router;