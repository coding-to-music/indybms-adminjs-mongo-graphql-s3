const { UserType } = require('../types');
const { UserInputType } = require('../inputs');

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
  updateUser,
}