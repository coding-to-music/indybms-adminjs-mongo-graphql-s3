const { User } = require("../models/index");
const { UserValidation } = require("../middleware/index");
// const {} = require()

let Controller = {};

Controller.register = async (user) => {
  const { error } = UserValidation.register(user);
  if (error) {
    throw Error(error);
  }
  try {
    // const salt = bcrypt.genSaltSync(10);
    // const hashed = bcrypt.hashSync(user.password, salt);
    let createdUser = await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
    });
    return createdUser;
  } catch (err) {
    throw Error(err);
  }
}

Controller.findUserById = async (id) => {
  try {
    let foundUser = await User.findById(id);
    return foundUser;
  } catch (err) {
    throw Error(err);
  }
}

module.exports = Controller;