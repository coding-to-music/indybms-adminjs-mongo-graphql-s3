const {
  GraphQLString,
} = require('graphql');

const { UserType } = require('../types');
const { UserController } = require('../../controllers/index');

const getUserQuery = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
  },
  resolve: (_, { id, email }) => {
    return UserController.findUserById(id);
  },
};

module.exports = { getUserQuery };