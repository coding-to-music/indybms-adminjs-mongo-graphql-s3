import { User } from "../models/index.js";
import { UserValidation } from "../middleware/index.js";
import bcrypt from "bcryptjs";
import { issueJWT } from "../utils/jwt.js";

let Controller = {};

Controller.register = async (req, res) => {
  let user = req.body.user;
  const { error } = UserValidation.register(user);
  if (error) {
    return res.status(401).json("Invalid Input: " + error);
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(user.password, salt);
    let createdUser = await User.create({
      name: user.name,
      email: user.email,
      password: hashed,
      phone: user.phone,
    });
    const token = issueJWT({
      id: createdUser._id,
      privilege: createdUser.privilege,
    });
    return res
      .header("Authorization", token)
      .status(200)
      .json({ id: createdUser._id, token: token });
  } catch (err) {
    return res.status(500).json("Could not register: " + err);
  }
};

Controller.login = async (req, res) => {
  let user = req.body.user;
  const { error } = UserValidation.login(user);
  if (error) {
    return res.status(401).json("Invalid Input: " + error);
  }
  try {
    const foundUser = await User.findOne({ email: user.email });
    const validPass = await bcrypt.compare(user.password, foundUser.password);
    console.log("foundUser", foundUser);
    console.log("validPass", validPass);
    console.log("user.password", user.password);
    console.log("foundUser.password", foundUser.password);

    if (!validPass) {
      return res.status(401).json("Username or Password is incorrect.");
    }
    const token = issueJWT({
      id: foundUser._id,
      privilege: foundUser.privilege,
    });
    return res
      .header("Authorization", token)
      .status(200)
      .json({ id: foundUser._id, token: token });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Could not login: " + err);
  }
};

Controller.updateUser = async (user, req) => {
  const { error } = UserValidation.updateUser(user);
  if (error) {
    throw Error(error);
  }
  try {
    let id = req.token.id;
    let updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name: user.name,
        email: user.email,
        phone: user.phone,
        privilege: user.privilege,
      },
      { returnDocument: "after" }
    );
    return updatedUser;
  } catch (err) {
    throw Error(err);
  }
};

Controller.findUserById = async (id, req) => {
  try {
    let foundUser = await User.findById(id)
      .populate("createdEvents")
      .populate("registeredEvents");
    return foundUser;
  } catch (err) {
    throw Error(err);
  }
};

Controller.findUserByEmail = async (email, req) => {
  try {
    let foundUser = await User.findOne({ email: email })
      .populate("createdEvents")
      .populate("registeredEvents");
    return foundUser;
  } catch (err) {
    throw Error(err);
  }
};

export default Controller;
