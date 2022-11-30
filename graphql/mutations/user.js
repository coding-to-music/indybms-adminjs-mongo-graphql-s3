const { UserType } = require('../types');
const { UserInputType } = require('../inputs');
const { UserController } = require('../../controllers');

const updateUser = {
  type: UserType,
  description: 'The mutation that allows you to update an existing User by Id',
  args: {
    user: {
      name: 'user',
      type: UserInputType('update'),
    },
  },
  resolve: async (_, { user }, req) => {
    return UserController.updateUser(user, req);
  },
};

module.exports = {
  updateUser,
}