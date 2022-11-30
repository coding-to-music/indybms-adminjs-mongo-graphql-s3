const {
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLBoolean,
  } = require('graphql');
  
  const EventType = new GraphQLObjectType({
    name: 'Event',
    description: 'This represents an Event',
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
        type: GraphQLString,
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
      startDate: {
        type: GraphQLString,
        resolve: (event) => event.startDate,
      },
      // Need to confirm date type
      endDate: {
        type: GraphQLString,
        resolve: (event) => event.endDate,
      },
      isStartEndSame: {
        type: GraphQLBoolean,
        resolve: (event) => event.isStartEndSame,
      },
      ageRestriction: {
        type: GraphQLInt,
        resolve: (event) => event.ageRestriction,
      },
      idRequired: {
        type: GraphQLBoolean,
        resolve: (event) => event.idRequired,
      },
      status: {
        type: GraphQLString,
        resolve: (event) => event.status,
      },
      registrationFee: {
        type: GraphQLInt,
        resolve: (event) => event.registrationFee,
      },
      ownerId: {
        type: GraphQLString,
        resolve: (event) => event.ownerId,
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