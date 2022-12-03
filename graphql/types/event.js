import {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
} from "graphql";
import { CategoryType, UserType } from "./index.js";

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
      type: CategoryType,
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
      type: new GraphQLList(GraphQLString),
      resolve: (event) => event.gallery,
    },
    // Need to confirm location type
    location: {
      type: new GraphQLList(GraphQLFloat),
      resolve: (event) => event.location,
    },
    // Need to confirm date type
    date: {
      type: GraphQLString,
      resolve: (event) => event.date,
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
      type: GraphQLFloat,
      resolve: (event) => event.registrationFee,
    },
    owner: {
      type: UserType,
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

export { EventType };
