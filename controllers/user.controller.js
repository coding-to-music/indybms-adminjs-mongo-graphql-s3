const User = require("../models/User");

let Controller = {};

Controller.register = async (req, res) => {
  try {
    return res.status(400).json({ message: '', error: err });
  } catch (err) {
    // You know better :(
  }
}

module.exports = Controller;