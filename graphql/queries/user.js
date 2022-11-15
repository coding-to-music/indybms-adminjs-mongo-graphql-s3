const {
  GraphQLString,
} = require('graphql');

const { UserType } = require('../types');

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
  resolve: (user, { id, email }) => {},
};

module.exports = { getUserQuery };