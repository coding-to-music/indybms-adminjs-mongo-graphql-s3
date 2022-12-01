const {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
} = require("graphql");

const EventInputType = (type) => {
  let allGraphFields = {};
  const standardGraphFields = {
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString,
    },
    maxAllowedRegistrations: {
      type: GraphQLInt,
    },
    coverImage: {
      type: GraphQLString,
    },
    gallery: {
      type: [GraphQLString],
    },
    location: {
      type: [GraphQLFloat],
    },
    date: {
      type: GraphQLString,
    },
    ageRestriction: {
      type: GraphQLBoolean,
    },
    registrationFee: {
      type: GraphQLFloat,
    },
  };

  switch (type) {
    case "create":
      allGraphFields = {
        ...standardGraphFields,
      };
      break;
    case "update":
      allGraphFields = {
        ...standardGraphFields,
        id: {
          type: GraphQLString,
        },
        status: {
          type: GraphQLString,
        },
      };
      break;
    default:
      allGraphFields = {
        ...standardGraphFields,
      };
  }

  const eventInputType = new GraphQLInputObjectType({
    name: `EventInputType${type[0].toUpperCase() + type.slice(1, type.length - 1)}`,
    description: "This represents a EventInputType",
    fields: allGraphFields,
  });

  return eventInputType;
};

module.exports = { EventInputType };
