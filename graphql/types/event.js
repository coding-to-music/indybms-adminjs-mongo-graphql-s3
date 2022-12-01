const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLBoolean,
} = require("graphql");
const categoryTypeFile = require('./category')
const userTypeFile = require('./user')

const EventType = new GraphQLObjectType({
  name: "Event",
  description: "This represents an Event",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (event) => event.id,
    },
    title: {
      type: GraphQLString,
      resolve: (event) => event.title,
    },
    description: {
      type: GraphQLString,
      resolve: (event) => event.description,
    },
    category: {
      type: categoryTypeFile.CategoryType,
      resolve: (event) => event.category,
    },
    maxAllowedRegistrations: {
      type: GraphQLInt,
      resolve: (event) => event.maxAllowedRegistrations,
    },
    coverImage: {
      type: GraphQLString,
      resolve: (event) => event.coverImage,
    },
    gallery: {
      type: [GraphQLString],
      resolve: (event) => event.gallery,
    },
    // Need to confirm location type
    location: {
      type: [GraphQLFloat],
      resolve: (event) => event.location,
    },
    // Need to confirm date type
    date: {
      type: GraphQLString,
      resolve: (event) => event.startDate,
    },
    ageRestriction: {
      type: GraphQLBoolean,
      resolve: (event) => event.ageRestriction,
    },
    status: {
      type: GraphQLString,
      resolve: (event) => event.status,
    },
    registrationFee: {
      type: GraphQLInt,
      resolve: (event) => event.registrationFee,
    },
    owner: {
      type: userTypeFile.UserType,
      resolve: (event) => event.owner,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (user) => user.updatedAt,
    },
  }),
});

module.exports = { EventType };
