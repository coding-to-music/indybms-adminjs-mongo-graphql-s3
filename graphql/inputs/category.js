const {
  GraphQLInputObjectType,
  GraphQLString,
} = require('graphql');

const CategoryInputType = new GraphQLInputObjectType({
  name: 'CategoryInput',
  description: 'This represents a CategoryInputType',
  fields: () => ({
    name: {
      type: GraphQLString,
    }
  }),
});

module.exports = { CategoryInputType };