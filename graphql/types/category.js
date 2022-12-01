const {
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');
// const eventTypeFile = require('./event')

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'This represents a Category',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (category) => category.name,
    },
    // events: {
    //   type: [eventTypeFile.EventType],
    //   resolve: (category) => category.events,
    // },
  }),
});

module.exports = { CategoryType };