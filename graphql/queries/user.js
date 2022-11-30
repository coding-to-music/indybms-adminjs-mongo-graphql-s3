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
  resolve: (_, { id, email }, req) => {
    if (id) {
      return UserController.findUserById(id, req);
    } else {
      return UserController.findUserByEmail(email, req)
    }
  },
};

module.exports = { getUserQuery };