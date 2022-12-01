import express from "express";
const Router = express.Router();
import { UserController } from "../controllers/index.js";

Router.post("/login", async (req, res) => {
  await UserController.login(req, res);
});

Router.post("/register", async (req, res) => {
  await UserController.register(req, res);
});

export default Router;
