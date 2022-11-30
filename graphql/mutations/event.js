const { EventType } = require('../types');
const { UserInputType } = require('../inputs');
const { UserController } = require('../../controllers');

const createUser = {
  type: UserType,
  description: 'The mutation that allows you to create a new user',
  args: {
    user: {
      name: 'user',
      type: UserInputType('create'),
    },
  },
  resolve: async (_, { user }) => {
    return UserController.register(user);
  },
};

const updateUser = {
  type: UserType,
  description: 'The mutation that allows you to update an existing User by Id',
  args: {
    user: {
      name: 'user',
      type: UserInputType('update'),
    },
  },
  resolve: async (_, { user }) => {},
};

module.exports = {
  createUser,
  updateUser,
}